var express = require('express');
const { verifyToken } = require('../middlewares');
const authRouter = require('./auth');
const userRouter = require('./users');
const accountRouter = require('./accounts');
const transactionRouter = require('./transactions');
const paymentRouter = require('./payments');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    "success":true
  });
});

router.use('/auth', authRouter);
router.use('/users', verifyToken, userRouter)
router.use('/accounts', verifyToken, accountRouter)
router.use('/transactions', verifyToken, transactionRouter)
router.use('/pay', verifyToken, paymentRouter)

module.exports = router;
