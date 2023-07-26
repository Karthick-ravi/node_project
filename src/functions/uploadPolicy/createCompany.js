import companyModel from "../../models/company"

async function createCompany(companyData) {
    try {

        var companyExists = await companyModel.findOne({ companyName: companyData.company_name })

        if (!companyExists) {
            let newCompanyData = {
                companyName: companyData.company_name
            }

            var company = new companyModel(newCompanyData)
            companyExists = await company.save()
        }

        return companyExists

    } catch (error) {
        console.log(error, "company create file error")
    }

}

export default createCompany