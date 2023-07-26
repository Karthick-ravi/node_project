import asyncForEach from "../../helpers/asyncForEach"

async function headerValidation(headerColumn) {
    try {
        const objUser = {
            failedData: [],
            message: ''
        }

        var strUserData = {}
        await asyncForEach(headerColumn, (key, i) => {
            i = i + 1
            strUserData[key] = i
        })
        
        if (strUserData) {

            if (!strUserData.agent) {
                strUserData.failed = true
                objUser.message = 'Agent column name is missing'
            }

            if (!strUserData.firstname) {
                strUserData.failed = true
                objUser.message = 'FirstName column name is missing'
            }

            if (!strUserData.dob) {
                strUserData.failed = true
                objUser.message = 'DOB column name is missing'
            }

            if (!strUserData.address) {
                strUserData.failed = true
                objUser.message = 'Address column name is missing'
            }

            if (!strUserData.phone) {
                strUserData.failed = true
                objUser.message = 'Phone column name is missing'
            }

            if (!strUserData.state) {
                strUserData.failed = true
                objUser.message = 'State column name is missing'
            }

            if (!strUserData.zip) {
                strUserData.failed = true
                objUser.message = 'Zip column name is missing'
            }
            

            if (!strUserData.email) {
                strUserData.failed = true
                objUser.message = 'Email column name is missing'
            }

            if (!strUserData.usertype) {
                strUserData.failed = true
                objUser.message = 'UserType column name is missing'
            }

            if (!strUserData.account_name) {
                strUserData.failed = true
                objUser.message = 'Account_Name column name is missing'
            }

            if (!strUserData.category_name) {
                strUserData.failed = true
                objUser.message = 'Category_Name column name is missing'
            }


            if (!strUserData.company_name) {
                strUserData.failed = true
                objUser.message = 'Company_Name column name is missing'
            }

            if (!strUserData.policy_start_date) {
                strUserData.failed = true
                objUser.message = 'Policy_Start_Date column name is missing'
            }

            if (!strUserData.policy_number) {
                strUserData.failed = true
                objUser.message = 'Policy_Number column name is missing'
            }

            if (!strUserData.policy_end_date) {
                strUserData.failed = true
                objUser.message = 'Policy_End_Date column name is missing'
            }


            if (strUserData.failed) {
                objUser.failedData.push(strUserData)
            }

            return objUser
        }
    } catch (error) {
        console.log(error, "header validation file error")
    }
}

export default headerValidation
