const express  = require('express');
const { accountController } = require('../controllers');
const router = express.Router();

router.get('/', async (req, res) => {
    const { code, ...data } = await accountController.getAccount(req.user);
    res.status(code).send(data)
});

router.post('/create', async (req, res) => {
    const { code, ...data } = await accountController.createAccount(req.user);
    res.status(code).send(data)
});

router.post('/card', async(req, res) => {
    req.body.user = req.user;
    const { code, ...data } = await accountController.createCard(req.body);
    res.status(code).send(data)
});

router.delete('/card', async(req, res) => {
    const { code, ...data } = await accountController.deleteCard(req.body);
    res.status(code).send(data)
});

router.post('/upi', async(req, res) => {
    req.body.user = req.user;
    const { code, ...data } = await accountController.enableUPI(req.body);
    res.status(code).send(data)
});

module.exports = router;