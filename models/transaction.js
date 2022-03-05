const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Account',
        required: true
    },
    payer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Account',
        required:true
    },
    details: {
        type: String,
        required: true
    },
    cardNo: {
        type: String
    },
    upiID: {
        type: String
    }
}, {
    timestamps:true
})

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;