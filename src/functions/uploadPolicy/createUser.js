import userModel from "../../models/user"

async function createUser(userData) {
    try {
        console.log(userData)
        var userExists = await userModel.findOne({ firstName: userData.first_name, DOB: userData.dob, phone_number: userData.phone_number, gender: userData.gender})

        if (!userExists) {
            let newUserData = {
                firstName: userData.first_name,
                DOB: userData.dob,
                address: userData.address,
                phone_number: userData.phone_number,
                state: userData.state,
                zip_code: userData.zip_code,
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