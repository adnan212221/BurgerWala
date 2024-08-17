const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const jwt = require('jsonwebtoken');

// POST method
// Create user
// Public method

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user  already exists");
  }
  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      // token: user.generateToken()
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({
    message: "register successfully",
  });
});

// GET method
// lOGIN user
// Public method

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email ||!password) {
      res.status(400);
      throw new Error("Please add all fields");
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      throw new Error("Invalid email");
    }
    if (user) {
        if (password === user.password){
            const token = jwt.sign({
                user :{
                  _id: user.id,
                email: user.email,
                name: user.name,
                }
                }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE,
            })
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                messgae: 'Login Successfully',
                token: token
                })
        }
      
      } else {
        res.status(401);
        throw new Error("Invalid credentials");
      }
    }
  );


// GET method
// LOGOUT user
// Private method

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
        });
        res.status(200).json({ message: 'Logged out successfully' });

        if(err){
            res.status(400);
            throw new Error("error");
        }

})


// GET method
// myprofile user
// Private method

const myProfile = asyncHandler(async (req, res) => {
    res.json(req.user)
  });




module.exports = { createUser, loginUser, logoutUser, myProfile };
