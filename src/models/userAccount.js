var mongoose = require("mongoose")

const userAccount = new mongoose.Schema(
    {
        companyId: { type : String, required: [true, "Required Company Id"] }, 
        userId: { type : String, required: [true, "Required User Id"] },
        accountName: { type : String, required: [true, "Required User Id"] }
    },
    { timestamps: true, versionKey: false }
)

userAccount.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const userAccountModel = mongoose.model("userAccounts", userAccount)
export default userAccountModel


