var express = require('express');
var router = express.Router();
const { userController } = require('../controllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({"user":req.user, "success":true});
});
router.patch('/', async(req, res, next) => {
  const { code, ...data } = await userController.updateUser(req.body, req.user._id);
    res.status(code).send(data)
})
module.exports = router;
