var mongoose = require("mongoose")

const users = new mongoose.Schema(
    {
        firstName : { type : String, required: [true, "Required agent name"] },
        DOB : { type : String, required: [true, "Required Company ID"] },
        address : { type : String, default: "" },
        gender : { type : String, default: "" },
        userType : { type : String, required: [true, "Required user type"] },
        email : { type : String, default: "" },
        phone_number : { type : String, required: [true, "Required user phone number"] },
        state : { type : String, default: "" },
        zip_code : { type : String, default: "" }                
    },
    { timestamps: true, versionKey: false }
)

users.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const usersModel = mongoose.model("users", users)
export default usersModel
