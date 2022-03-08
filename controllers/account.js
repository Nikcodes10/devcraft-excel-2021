const { Account, UPI, Card } = require('../models');
const bcrypt = require('bcryptjs');

const getAccount = async (user) => {
    try {
        const account = await Account.findOne({user:user._id});
        return { "success":true, "code":200, account }
    } catch(e) {
        console.log(e);
    }
    return { "success":false, "code":500 }
}

const createAccount = async (user) => {
    const account = new Account(
        {
            user: user._id,
        }
    );
    
    return await account.save()
    .then(() => {
        return { "success":true, "code":200, account }
    }).catch(e => {
        return { "success":false, "code":500, "message":"couldnt create" }
    })
}

const enableUPI = async ({user, account, phone, password}) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const upi = new UPI(
        {
            user:user._id,
            password:hash,
            account,
            phone,
            id:`${user.username}@hyfi.com`
        }
    )
    return await upi.save()
    .then(() => {
        return { "success":true, "code":200, upi }
    }).catch(e => {
        return { "success":false, "code":500, "message":"couldnt create" }
    })
}

const colors = ['pink', 'violet', 'yellow', 'green', 'white'];

const createCard = async ({user, account, password}) => {
    console.log(user, account, password)
    const uniqueNumber = new Date().getTime();
    const cardNo = (uniqueNumber.toString() + (Math.random()*20)).replace('.', '').substr(0,20)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const card = new Card(
        {
            user:user._id,
            account,
            password:hash,
            color: colors[Math.floor(Math.random()*4)],
            cardNo,
        }
    )
    return await card.save()
    .then(() => {
        delete card.password
        return { "success":true, "code":200, card }
    }).catch(e => {
        return { "success":false, "code":500, "message":"couldnt create" }
    })
}

const deleteCard = async ({cardNo, password}) => {
    return await Card.findOne({cardNo}).lean().exec()
    .then(async(c) => {
        const correct = await bcrypt.compare(password, c.password)
        delete c.password
        if(!correct)    throw "Unauthorized";
        return c._id;
    }).then((_id)=>
        Card.findByIdAndDelete(_id)
    ).then(()=>{
        return { "success":true, "code":200, "message":"successfully deleted" }
    })
    .catch(e => {
        console.log(e)
        return { "success":false, "code":500, "message": "couldnt delete" }
    })
}

const accountController = { createAccount, createCard, enableUPI, deleteCard, getAccount }
module.exports = accountController;