import policyInfoModel from "../../src/models/policyInfo"

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
                        { $project: { "firstName": 1, "gender": 1, "DOB": 1, "address": 1 } }
                    ],
                    as: 'userInfos'
                }
            },
            {
                $project: {
                    policyNumber: 1, policyStartDate: 1, policyEndDate: 1, userInfos: 1
                }
            },
            { $sort: { createdAt: -1 } }
        ]).exec()
        res.send({ code: 0, message: "Success", data: userPolicy })
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default aggregationByUser



