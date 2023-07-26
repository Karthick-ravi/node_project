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

            if (!strUserData.s_no) {
                strUserData.failed = true
                objUser.message = 'S_No column name is missing'
            }

            if (!strUserData.agent_name) {
                strUserData.failed = true
                objUser.message = 'Agent_Name column name is missing'
            }

            if (!strUserData.first_name) {
                strUserData.failed = true
                objUser.message = 'First_Name column name is missing'
            }

            if (!strUserData.dob) {
                strUserData.failed = true
                objUser.message = 'DOB column name is missing'
            }

            if (!strUserData.address) {
                strUserData.failed = true
                objUser.message = 'Address column name is missing'
            }

            if (!strUserData.phone_number) {
                strUserData.failed = true
                objUser.message = 'Phone_Number column name is missing'
            }

            if (!strUserData.state) {
                strUserData.failed = true
                objUser.message = 'State column name is missing'
            }

            if (!strUserData.zip_code) {
                strUserData.failed = true
                objUser.message = 'Zip_Code column name is missing'
            }

            if (!strUserData.gender) {
                strUserData.failed = true
                objUser.message = 'Gender column name is missing'
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

            if (!strUserData.policy_startdate) {
                strUserData.failed = true
                objUser.message = 'Policy_StartDate column name is missing'
            }

            if (!strUserData.policy_enddate) {
                strUserData.failed = true
                objUser.message = 'Policy_EndDate column name is missing'
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
