import userAccountModel from "../../models/userAccount"

async function createUserAccount(companyData, userData, strUserData) {
    try {

        var userAccountExists = await userAccountModel.findOne({ companyId: companyData._id, userId: userData._id })

        if (!userAccountExists) {
            let newUserAccountData = {
                companyId: companyData._id,
                userId: userData._id,
                accountName: strUserData.account_name
            }

            var userAccount = new userAccountModel(newUserAccountData)
            userAccountExists = await userAccount.save()
        }

        return userAccountExists

    } catch (error) {
        console.log(error, "user account create file error")
    }

}

export default createUserAccount