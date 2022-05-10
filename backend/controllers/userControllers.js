const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');

// @desc    Register a new User
// @route   POST  /api/users
// @access  Public
const registerUser = asyncHandler( async (req,res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please includes all feilds')
    }

    const userExist = await User.findOne({email: email})

    if(userExist){
        res.status(400)
        throw new Error('User Already Exists')
    }

    // Create user
    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: null
        })
    }
 
    res.send('Register User')
})


// @desc    Login User
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password } = req.body;

    const user = await User.findOne({email: email})

    if(user && password === user.password){
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: null
        })
    }else{
        res.status(400)
        throw new Error('Invalid Email or Password')
    }

    console.log("Login user")
})

module.exports = {
    registerUser,
    loginUser
}