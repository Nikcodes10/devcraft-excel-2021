const express  = require('express');
const { transactionController } = require('../controllers');
const router = express.Router();

router.post('/details', async (req, res) => {
    const { code, ...data } = await transactionController.getTransactions(req.body);
    res.status(code).send(data)
});

module.exports = router;