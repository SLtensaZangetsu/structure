const {user} = require('../model/userModel');


const getUserProfile = async (req, res) => {
    const {name, email} = req.body;

    const User = await user.create({
        name: name,
        email: email,
    })
    
    res.status(201).json({
        status: 'success',
        data: {
            User: User
        }
    });
}

module.exports = {
    getUserProfile
}

