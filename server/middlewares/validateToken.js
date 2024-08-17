const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                res.status(401).json({
                    message: 'Invalid token. Please log in again.',
                })
            }
            req.user = decoded.user;
            console.log(req.user);
            next();
            
        } )
        if(!token){
            res.status(401).json({
                message: 'Access denied. No token provided'
            })
        }
    }
})

const validateAdmin = asyncHandler(async(req,res,next)=>{
    const user = req.user;
    if(user.role !== 'admin'){
        res.status(403).json({
            message: 'You are not authorized to access this route'
        })
        }
        next();
    
})

module.exports = {validateToken, validateAdmin}
