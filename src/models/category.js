import mongoose from "mongoose"

const category = new mongoose.Schema(
    {
        categoryName : { type : String, required: [true, "Required Category name"] },        
        companyId: { type : String, required: [true, "Required Company Id"] }                        
    },
    { timestamps: true, versionKey: false }
)

category.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const categoryModel = mongoose.model("categorys", category)
export default categoryModel
