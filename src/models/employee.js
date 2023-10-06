import mongoose from "mongoose"

const employee = new mongoose.Schema(
    {

        firstName: { type: String, required: [true, "Required employee first name"] },
        lastName: { type: String, required: [true, "Required employee last name"] },
        email: { type: String, default: "" },
        age: { type: String, default: "" },
        gender: {type: String, enum: ['Male', 'Female', 'Other']},
        position: { type: String, required: [true, "Required employee position"] },
        department: { type: String, required: [true, "Required employee department"] },
        hireDate: { type: Date, required: true},
        salary: { type: String, default: "" },
        address: {
            street: { type: String, default: "" },
            city: { type: String, default: "" },
            state: { type: String, default: "" },
            zip: { type: String, default: "" }
        },
        skills: { type: Array, default: [] },
        isActive: {type: Boolean, default: true },
    },
    { timestamps: true, versionKey: false }
)

employee.set('toJSON', { virtuals: true, transform: (doc, ret, options) => { delete ret._id; } })

const employeeModel = mongoose.model("employees", employee)
export default employeeModel
