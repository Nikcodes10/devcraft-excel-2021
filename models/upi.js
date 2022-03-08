const mongoose = require('mongoose');
const { Schema } = mongoose;

const upiSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Account'
    },
    phone: {
        type: String,
        required:true
    },
    id: {
        type: String,
        required:true
    },
    password: {
        type:String,
        required:true,
        select:false
    }
}, {
    timestamps:true
})

const UPI = mongoose.model('UPI', upiSchema);
module.exports = { UPI, upiSchema};