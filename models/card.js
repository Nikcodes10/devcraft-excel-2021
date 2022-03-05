const mongoose = require('mongoose');
const { Schema } = mongoose;

const creditCardSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Account'
    },
    password: {
        type: String,
        select:false,
        required:true
    },
    color: {
        type: String,
        required: true
    },
    cardNo: {
        type: String,
        required:true
    }
}, {
    timestamps:true
})

const Credit = mongoose.model('Credit', creditCardSchema);
module.exports = Credit;