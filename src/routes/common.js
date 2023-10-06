import express from "express"
import createEmployee from "../functions/createEmployee"
import getEmployee from "../functions/getEmployee"
import updateEmployee from "../functions/updateEmployee"
import deleteEmployee from "../functions/deleteEmployee"

const Router = express.Router()
Router.route("/create/employee").post(createEmployee)
Router.route("/get/employee").get(getEmployee)
Router.route("/update/employee/:id").put(updateEmployee)
Router.route("/delete/employee/:id").delete(deleteEmployee)

export { Router as default }