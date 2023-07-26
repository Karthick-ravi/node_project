import moment from "moment"
import policyInfoModel from "../../src/models/policyInfo"
import asyncForEach from '../helpers/asyncForEach'

async function aggregationByUser(req, res) {
    try {
        var userPolicy = await policyInfoModel.aggregate([
            { $match: {} },
            { $addFields: { id: { $toObjectId: "$userId" } } },
            {
                $lookup: {
                    from: "users",
                    let: { "uId": "$id" },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$$uId", "$_id"] } }, },
                        { $project: { "firstName": 1, "gender": 1, "address": 1 } }
                    ],
                    as: 'userInfos'
                }
            },
            {
                $project: {
                    policyNumber: 1, policyMode: 1, policyStartDate: 1, policyEndDate: 1, userInfos: 1
                }
            },
            { $sort: { createdAt: -1 } }
        ]).exec()

        if (userPolicy.length > 0) {
            await asyncForEach(userPolicy, async (user) => {
                user.policyStartDate =  moment(user.policyStartDate).format("YYYY-MM-DD")
                user.policyEndDate =  moment(user.policyEndDate).format("YYYY-MM-DD")
            })
        }
        res.send({ code: 0, message: "Success", data: userPolicy })
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default aggregationByUser



