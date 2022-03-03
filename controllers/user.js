const { User } = require('../models');

const updateUser = async (data, _id) => {
    try {
        delete data.email;
        delete data.password;
        delete data._id;
        const user = await User.findByIdAndUpdate(_id, data, { new:true });
        return {"code":200, "success":true, user}
    } 
    catch(e) {
        console.log(e);
        return {"code":304, "success":false, "message":"Could'nt update!"}
    }
}

const userController = { updateUser };
module.exports = userController;