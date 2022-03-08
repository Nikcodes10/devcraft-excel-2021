const { Card, Account, UPI, Transaction } = require('../models');
const bcrypt = require('bcryptjs');

const handleCardPayment = async ({cardNo, password, recieverAccount, amount}) => {
    let reciever = recieverAccount;
    let payer;
    const setPayer = (v) => {
        console.log(v);
        payer = v;
    }
    return await Card.findOne({cardNo}).select('password').populate('account').lean().exec()
    .then(async(c) => {
        const correct = await bcrypt.compare(password, c.password)
        delete c.password
        if(!correct)    throw "Unauthorized";
        setPayer(c.account._id)
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
            cardNo,
            amount
        })
        return transaction.save()
    })
    .then(() => {
        return { "success": true, "code":200, "message": "transaction successful"}
    })
    .catch(e => {
        console.log(e);
        return { "success": false, "code":500, "message": "transaction failed!"}
    })
}

const handleUPIpayment = async ({id, password, phone, recieverAccount, amount}) => {
    let upi, upiID;
    let reciever = recieverAccount, payer;
    if(phone)
        upi = UPI.findOne({phone}).select('password').select('id').populate('account').lean().exec()
    else upi = UPI.findOne({id}).select('password').select('id').populate('account').lean().exec()

    return await upi.then(async(u) => {
        const correct = await bcrypt.compare(password, u.password)
        if(!correct)    throw "Unauthorized";

        upiID = u.id;
        console.log(u)
        payer = u.account._id
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
            upiID,
            amount
        })
        return transaction.save()
    }).then(() => {
        return { "success": true, "code":200, "message": "transaction successful"}
    })
    .catch(e => {
        console.log(e);
        return { "success": false, "code":500, "message": "transaction failed!"}
    })
}

const paymentController = { handleCardPayment, handleUPIpayment }
module.exports = paymentController;