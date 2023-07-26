import categoryModel from "../../models/category"

async function createCategory(categoryData, companyData) {
    try {

        var categoryExists = await categoryModel.findOne({ categoryName: categoryData.category_name, companyId: companyData._id })

        if (!categoryExists) {
            let newCategoryData = {
                categoryName: categoryData.category_name,
                companyId: companyData._id
            }

            var category = new categoryModel(newCategoryData)
            categoryExists = await category.save()
        }

        return categoryExists

    } catch (error) {
        console.log(error, "category create file error")
    }

}

export default createCategory