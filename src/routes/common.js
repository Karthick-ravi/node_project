import express from "express"
import {upload} from "../helpers/upload"
import policyUserRegister from "../functions/uploadPolicy/policyUserRegister"
import searchPolicyInfo from "../functions/searchPolicyInfo"
import aggregationByUser from "../functions/aggregationByUser"

const Router = express.Router()
Router.route("/policy/excel/users").post(upload, policyUserRegister)
Router.route("/policy/search").post(searchPolicyInfo)
Router.route("/policy/aggregation/user").post(aggregationByUser)

export { Router as default }