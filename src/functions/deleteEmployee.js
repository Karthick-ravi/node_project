import employeeModel from "../../src/models/employee"

async function deleteEmployee(req, res) {
    try {
        let employeeId = req.params.id
        const employees = await employeeModel.findById(employeeId)

        if (employees) {
            await employeeModel.findByIdAndUpdate(employeeId, { $set: { isActive: false} })
            res.send({ code: 0, message: "Successfully deleted data", data: {} })
        } else {
            res.send({ code: 1, message: "Invalid employee id", data: null })
        }
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default deleteEmployee