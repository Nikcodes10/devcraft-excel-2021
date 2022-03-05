const authController = require('./auth');
const userController = require('./user');
const accountController = require('./account');
const paymentController = require('./payment');
const transactionController = require('./transaction');

module.exports = {
    authController,
    userController,
    accountController,
    paymentController,
    transactionController
}