import employeeModel from "../../src/models/employee"

async function getEmployee(req, res) { 
    try { 

        const employees = await employeeModel.find({isActive: true}); 

        res.send({ code: 0, message: "Successfully fetched data", data: {employee: employees, count: employees.length} })

    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default getEmployee