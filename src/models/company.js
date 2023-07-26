import mongoose from "mongoose"

const company = new mongoose.Schema(
    {
        companyName : { type : String, required: [true, "Required agent name"] }                       
    },
    { timestamps: true, versionKey: false }
)

company.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const companyModel = mongoose.model("companys", company)
export default companyModel
