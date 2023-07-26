import mongoose from "mongoose"

const product = new mongoose.Schema(
    {
        title : { type : String, default: "" },
        description : { type : String, default: "" },
        price : { type : String, default: "" },
        discountPercentage : { type : String, default: "" },
        rating : { type : String, default: "" },
        stock : { type : String, default: "" },
        brand : { type : String, default: "" }
    },
    { timestamps: true, versionKey: false }
)

product.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const productsModel = mongoose.model("products", product)
export default productsModel
