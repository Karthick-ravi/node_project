import mongoose from "mongoose"
const mongoosePaginate = require('mongoose-paginate-v2')

const policyInfo = new mongoose.Schema(
    {
        policyNumber : { type : String, required: [true, "Required Policy Number"] },  
        policyMode: { type : String, required: [true, "Required Policy Mode"] },       
        policyStartDate : { type : String, required: [true, "Required Policy Start Date"] },        
        policyEndDate : { type : String, required: [true, "Required Policy End Date"] },        
        categoryId : { type : String, required: [true, "Required Category Id"] },        
        collectionId : { type : String, required: [true, "Required Collection Id"] },
        userId : { type : String, required: [true, "Required User Id"] },        
        companyId: { type : String, required: [true, "Required Company Id"] }                        
    },
    { timestamps: true, versionKey: false }
)

policyInfo.plugin(mongoosePaginate)

policyInfo.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const policyInfoModel = mongoose.model("policyInfo", policyInfo)
export default policyInfoModel
