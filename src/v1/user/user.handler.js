const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.get('/', userController.list);

router.post('/', userController.createUser)
router.post('/bulk-insert', userController.bulkInsertUser)


module.exports = router
