import policyInfoModel from "../../models/policyInfo"

async function createPolicyInfo(strUserData, companyData, categoryData, userAccountData, userData) {
    try {

        var policyInfoExists = await policyInfoModel.findOne({ policyNumber: strUserData.policy_number, policyStartDate: strUserData.policy_startdate, policyEndDate: strUserData.policy_enddate,
                                                         categoryId: categoryData._id, collectionId: userAccountData._id, userId: userData._id, companyId: companyData._id})

        if (!policyInfoExists) {
            let newPolicyInfo = {
                policyNumber: strUserData.policy_number,
                policyStartDate: strUserData.policy_startdate,
                policyEndDate: strUserData.policy_enddate,
                categoryId: categoryData._id,
                collectionId: userAccountData._id,
                userId: userData._id,
                companyId: companyData._id
            }

            var policyInfo = new policyInfoModel(newPolicyInfo)
            policyInfoExists = await policyInfo.save()
        }

        return policyInfoExists

    } catch (error) {
        console.log(error, "policy info create file error")
    }

}

export default createPolicyInfo