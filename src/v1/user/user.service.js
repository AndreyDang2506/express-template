const userModel = require("./user.model")

const createUser = async (userData) => {
    return await userModel.create(userData);
}

const bulkInsertUser = async (userData) => {
    return await userModel.insertMany(userData);
}

const listPagination = async (pageSize, page) => {
    return await userModel.find().skip((page-1) * pageSize).limit(pageSize);
}


module.exports = {
    createUser,
    bulkInsertUser,
    listPagination
}
