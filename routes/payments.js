const express  = require('express');
const { paymentController } = require('../controllers');
const router = express.Router();

router.post('/secure/card', async (req, res) => {
    const { code, ...data } = await paymentController.handleCardPayment(req.body);
    console.log(data)
    res.status(code).send(data)
});

router.post('/secure/upi', async (req, res) => {
    req.body.user = req.user
    const { code, ...data } = await paymentController.handleUPIpayment(req.body);
    res.status(code).send(data)
});

module.exports = router;