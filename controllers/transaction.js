const { Transaction } = require("../models");

const getTransactions = async ({
    cardNo, upiID, account
}) => {
    let transactions;
    try {
        if(cardNo) {
            transactions = await Transaction.find({cardNo}).lean().exec();
        } else if(upiID) {
            transactions = await Transaction.find({upiID}).lean().exec();
        } else {
            transactions = await Transaction.find({$or: [
                { 'payer': account },
                { 'reciever': account }
              ]}).lean().exec();
        }
        return { "code":200, "message":"success", transactions }
    } catch(e) {
        console.log(e);
        return { "code":500, "message":"couldnt retrieve"}
    }
}

const transactionController = { getTransactions }
module.exports = transactionController;