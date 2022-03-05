var express = require('express');
const { verifyToken } = require('../middlewares');
const authRouter = require('./auth');
const userRouter = require('./users');
const accountRouter = require('./account');
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

module.exports = router;
