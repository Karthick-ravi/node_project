import employeeModel from "../../src/models/employee"

async function updateEmployee(req, res) {
    try {
        let employeeId = req.params.id
        let input = req.body
        const employees = await employeeModel.findById(employeeId)

        if (employees) { 
            await employeeModel.findByIdAndUpdate(employeeId, { $set: { salary: input.salary, skills: input.skills } })
            const data = await employeeModel.findById(employeeId)
            res.send({ code: 0, message: "Successfully updated data", data: data })
        } else {
            res.send({ code: 1, message: "Invalid employee id", data: null })
        }
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default updateEmployee