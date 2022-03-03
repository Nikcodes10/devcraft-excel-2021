const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const colors = ['red', 'blue', 'pink'];

const signIn = async ({username, name, password, email}) => {
    if(!username || !password || !name || !email) 
        return { "success":false, "message":"Bad Request", "code":400 }
    
        try {
            const existing = await User.find().or([{username, email}])
            if(existing.length > 0) {
                if(existing[0].email === email)
                    return { "success":false, "message":"User with given email already exists!", "code":304 }
                return { "success": false, "message":"username already taken!", "code":304 }
            }
            //request validated
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const color = colors[(Math.ceil(Math.random()*5) + 1) % 3];
            
            const user = new User({
                username,
                'password': hash,
                name,
                email,
                color
            });
            await user.save();

            delete user.password;

            const token = jwt.sign(
                user._id.toJSON(),
                process.env.TOKEN_SECRET
            );
    
            return { "success": true, "message":"Signup successful!", token, user, "code":201 }
        } 
        catch(e) {
            console.log(e);
        }
        return { "success": false, "message":"Request failed!", "code":500 }
}

const logIn = async ({username, password, email}) => {
    if((!username && !email) || (username && email))
        return { "success":false, "message":"Bad Request", "code":400 }

    try {
        let user;
        if(username)    user = await User.findOne({ username }).select("+password").lean().exec()
        else    user = await User.findOne({ email }).select("+password").lean().exec()

        if(!user)
            return { "success": false, "message":"No such user!", "code":304 }
        
        const correct = await bcrypt.compare(password, user.password)
        delete user.password

        if(!correct)
            return { "success": false, "message":"Incorrect username or password", "code":304 }
        
        const token = jwt.sign(
            user._id.toJSON(),
            process.env.TOKEN_SECRET
        );

        return { "success": true, "message":"Login success!" , token, user, "code":200 }//, 200;
    }
    catch(e) {
        console.log(e)
    }
    return { "success": false, "message":"Could'nt Login!", "code":500 }
}

const userController = { signIn, logIn }
module.exports = userController;