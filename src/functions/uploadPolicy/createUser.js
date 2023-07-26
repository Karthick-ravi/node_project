import userModel from "../../models/user"

async function createUser(userData) {
    try {
        var userExists = await userModel.findOne({ firstName: userData.firstname, phone_number: userData.phone})

        if (!userExists) {
            let newUserData = {
                firstName: userData.firstname,
                DOB: userData.dob,
                address: userData.address,
                phone_number: userData.phone,
                state: userData.state,
                zip_code: userData.zip,
                email: userData.email,
                gender: userData.gender,
                userType: userData.usertype
            }

            var user = new userModel(newUserData)
            userExists = await user.save()
        }

        return userExists

    } catch (error) {
        console.log(error, "user create file error")
    }

}

export default createUser