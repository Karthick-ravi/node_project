import employeeModel from "../../src/models/employee"
import moment from 'moment'

async function createEmployee(req, res) {
    try {

        let input = req.body

        if (!input.firstName || input.firstName == undefined || input.firstName == null || input.firstName == "") {
            throw new Error("Please provide employee first name")
        }

        const newEmployee = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            age: input.age,
            position: input.position,
            department: input.department,
            salary: input.salary,
            gender: input.gender,
            hireDate: moment(input.hireDate, 'YYYY-MM-DD'),
            address: {
                street: input.address.street,
                city: input.address.city,
                state: input.address.state,
                zip: input.address.zip
            },
            skills: input.skills
        };

        var employee = new employeeModel(newEmployee)
        employee = await employee.save()

        res.send({ code: 0, message: "Employee created successfully.", data: employee })
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default createEmployee



