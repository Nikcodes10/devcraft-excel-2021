const express  = require('express');
const { authController } = require('../controllers');
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { code, ...data } = await authController.signIn(req.body);
    res.status(code).send(data)
});

router.post('/login', async(req, res) => {
    const { code, ...data } = await authController.logIn(req.body);
    res.status(code).send(data)
});

module.exports = router;