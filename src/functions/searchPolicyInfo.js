import policyInfoModel from "../../src/models/policyInfo"
import userModel from "../../src/models/user"
import userAccountModel from "../../src/models/userAccount"
import companyModel from "../../src/models/company"
import categoryModel from "../../src/models/category"
import asyncForEach from '../helpers/asyncForEach'

async function searchPolicyInfo(req, res) {
    try {

        const input = req.body
        var page = input.page || 1
        var limit = input.limit || 10
        var filterObject = {}

        if (input.userName) {
            var userNames = await userModel.find({}, { firstName: 1 }, { 'sort': { createdAt: 1 } })
            userNames = userNames.sort(function (obj1, obj2) { return obj1.firstName.localeCompare(obj2.firstName) })
            var autoFilterUserNames = userNames.filter(option => option.firstName.toLowerCase().includes(input.userName.toLowerCase()))
            var validUserName = []
            await asyncForEach(autoFilterUserNames, async (user) => {
                validUserName.push(user._id)
            })
            filterObject.userId = { $in: validUserName }
        }

        var policyCount = await policyInfoModel.countDocuments(filterObject);
        var policyInfoData = await policyInfoModel.paginate(filterObject, { page: page, limit: limit, sort: { createdAt: -1 } })

        if (policyInfoData.docs.length > 0) {
            var policyData = []
            await asyncForEach(policyInfoData.docs, async (obj) => {
                let objPolicy = {}
                objPolicy.policyNumber = obj.policyNumber
                objPolicy.policyStartDate = obj.policyStartDate
                objPolicy.policyEndDate = obj.policyEndDate
                var getUser = await userModel.findById(obj.userId)
                if (getUser) {
                    objPolicy.firstName = getUser.firstName
                    objPolicy.DOB = getUser.DOB
                    objPolicy.gender = getUser.gender
                    objPolicy.userId = getUser._id
                }

                var getUserAC = await userAccountModel.findById(obj.collectionId)
                if (getUserAC) {
                    objPolicy.collectionId = getUserAC._id
                    objPolicy.accountName = getUserAC.accountName
                }

                var getCompany = await companyModel.findById(obj.companyId)
                if (getCompany) {
                    objPolicy.companyName = getCompany.companyName
                    objPolicy.companyId = getCompany._id
                }

                var getCategory = await categoryModel.findById(obj.categoryId)
                if (getCategory) {
                    objPolicy.categoryName = getCategory.categoryName
                    objPolicy.categoryId = getCategory._id
                }
                policyData.push(objPolicy)
            })
            res.send({ code: 0, message: "SuccessFully fetch data", data: { policyCount: policyCount, policyInfo: policyData } })
        } else {
            res.send({ code: 0, message: "No data found", data: { policyCount: 0, policyInfo: [] } })
        }

    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default searchPolicyInfo