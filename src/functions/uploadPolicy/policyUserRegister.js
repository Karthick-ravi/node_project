import XLSX from 'xlsx'
import asyncForEach from '../../helpers/asyncForEach'
import headerValidation from "../uploadPolicy/headerValidation"
import createCompany from "../uploadPolicy/createCompany"
import createCategory from "../uploadPolicy/createCategory"
import createAgent from "../uploadPolicy/createAgent"
import createUser from "../uploadPolicy/createUser"
import createUserAccount from "../uploadPolicy/createUserAccount"
import createPolicyInfo from "../uploadPolicy/createPolicyInfo"
import Path from "path"


async function policyUserRegister(req, res) {
    try {

        let input = req.body


        const templateXLSX = req.files[0]
        var policyInfoData = []
        const file = XLSX.read(templateXLSX.buffer, { cellDates: false })
        const sheets = file.SheetNames
        await asyncForEach(sheets, async (item, i) => {
            const tempData = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])            
            if (tempData.length > 0) {
                await asyncForEach(tempData, async (res) => {
                var keysUpper = Object.keys(res)
                var strUserData = {}
                await asyncForEach(keysUpper, async (key) => {
                    strUserData[key.toLowerCase()] = res[key]
                })
                policyInfoData.push(strUserData)
            })  
            }
        })


        if (policyInfoData.length === 0) {
            res.send({ code: 1, message: 'No records found', data: null })
        } else {
            const headerColumn = Object.keys(policyInfoData[0])
            if (headerColumn.length === 0 ) {
                res.send({ code: 1, message: 'No records found', data: null })  
            } else {
                const validData = await headerValidation(headerColumn)
                if (validData.failedData.length === 1) {
                    throw new Error(validData.message)
                } else {
                    await asyncForEach(policyInfoData, async (strUserData) => { 

                        //Here, I will do data validation and require to time.        
                        //================================================
                        // finished


                        var companyData = await createCompany(strUserData)
                        
                        var categoryData = await createCategory(strUserData, companyData)
                        
                        var agentData = await createAgent(strUserData, companyData)
            
                        var userData = await createUser(strUserData)
            
                        var userAccountData = await createUserAccount(companyData, userData, strUserData)
            
                        var userAccountData = await createPolicyInfo(strUserData, companyData, categoryData, userAccountData, userData)
            
                        
                    })

                    res.send({ code: 0, message: "Success", data: {} })
                }

            }
            
        }
    } catch (error) {
        res.send({ code: 1, message: error.message, data: null })
    }
}

export default policyUserRegister