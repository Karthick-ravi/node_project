var mongoose = require("mongoose")

const users = new mongoose.Schema(
    {
        firstName : { type : String, required: [true, "Required agent name"] },
        DOB : { type : String, required: [true, "Required Company ID"] },
        address : { type : String, required: [true, "Required user address"] },
        gender : { type : String, required: [true, "Required user gender"] },
        userType : { type : String, required: [true, "Required user type"] },
        email : { type : String, required: [true, "Required user email"] },
        phone_number : { type : String, required: [true, "Required user phone number"] },
        state : { type : String, required: [true, "Required user state"] },
        zip_code : { type : Number, required: [true, "Required user zip code"] }                
    },
    { timestamps: true, versionKey: false }
)

users.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const usersModel = mongoose.model("users", users)
export default usersModel
