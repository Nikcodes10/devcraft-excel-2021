const { Card, Account, UPI, Transaction } = require('../models');
const bcrypt = require('bcryptjs');

const handleCardPayment = ({cardNo, password, recieverAccount, amount}) => {
    let reciever = recieverAccount, payer;
    Card.findOne({cardNo}).select('password').lean().exec()
    .then(async(c) => {
        const correct = await bcrypt.compare(password, c.password)
        delete c.password
        if(!correct)    throw "Unauthorized";

        payer = c.account;
        return payer;

    }).then(a => 
        Account.findByIdAndUpdate(a, {
            $inc: {
                balance: -1*amount
            }
        }, { new:true }).exec()
    ).then(() => 
        Account.findByIdAndUpdate(recieverAccount, {
            $inc: {
                balance: amount
            }
        }).exec()
    ).then(() => {
        const transaction = new Transaction({
            reciever,
            payer,
            details:`paid via card XXXX ${cardNo.substr(13)}`,
            cardNo
        })
        return transaction.save()
    })
    .then(() => {
        return { "success": true, "message": "transaction successful"}
    })
    .catch(e => {
        console.log(e);
        return { "success": false, "message": "transaction failed!"}
    })
}

const handleUPIpayment = ({id, password, phone, recieverAccount, amount}) => {
    let upi, upiID;
    let reciever = recieverAccount, payer;
    if(phone)
        upi = UPI.findOne({phone}).select('password').lean().exec()
    else upi = UPI.findOne(id).select('password').lean().exec()

    upi.then(async(u) => {
        const correct = await bcrypt.compare(password, u.password)
        delete u.password
        if(!correct)    throw "Unauthorized";
        upiID = u.id;
        payer = u.account
        return payer;
    }).then(a => 
        Account.findByIdAndUpdate(a, {
            $inc: {
                balance: -1*amount
            }
        }, { new:true }).exec()
    ).then(() => 
        Account.findByIdAndUpdate(recieverAccount, {
            $inc: {
                balance: amount
            }
        }).exec()
    ).then(() => {
        const transaction = new Transaction({
            reciever,
            payer,
            details:`paid via upi ${upiID}`,
            upiID
        })
        return transaction.save()
    }).then(() => {
        return { "success": true, "message": "transaction successful"}
    })
    .catch(e => {
        console.log(e);
        return { "success": false, "message": "transaction failed!"}
    })
}

const paymentController = { handleCardPayment, handleUPIpayment }
module.exports = paymentController;