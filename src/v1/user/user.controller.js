const userService = require('./user.service');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(async (req, res) => {
    const userResult = await userService.createUser(req.body)
    res.send(userResult);
});

const bulkInsertUser = catchAsync(async (req, res) => {
    const usersResult = await userService.bulkInsertUser(req.body)
    res.send(usersResult);
});

const list = catchAsync(async (req, res) => {
    const { pageSize, page } = req.query;
    const users = await userService.listPagination(pageSize, page)
    res.send(users);
});

module.exports = {
    createUser,
    bulkInsertUser,
    list
}
