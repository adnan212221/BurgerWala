const asyncHandler = require('express-async-handler');
const order = require('../models/order');

// POST method
//cretae order
// private 

const placeOrder = asyncHandler(async(req,res, next)=>{
    const {shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;
    console.log('adnan');

    // const user = req.user._id;

    const orderOptions ={
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        // user,
    }


    const newOrder = await order.create(orderOptions);
    console.log(orderOptions);


    res.status(201).json({
        success:true,
        message:'Order placed successfully via COD'
    })
})

// const placeOrderOnline = asyncHandler(async(req,res, next)=>{
//     const {shippingInfo,
//         orderItems,
//         paymentInfo,
//         itemsPrice,
//         taxPrice,
//         shippingPrice,
//         totalPrice
//     } = req.body;
//     console.log('adnan');

//     // const user = req.user._id;

//     const orderOptions ={
//         shippingInfo,
//         orderItems,
//         paymentInfo,
//         itemsPrice,
//         taxPrice,
//         shippingPrice,
//         totalPrice,
//         // user,
//     }


//     const newOrder = await order.create(orderOptions);
//     console.log(orderOptions);


//     res.status(201).json({
//         success:true,
//         message:'Order placed successfully via COD'
//     })
// })


const getOrder = asyncHandler(async(req, res, next)=>{
    const orders = await order.find({
        user:req.user._id
    }).populate('user', 'name');
    res.status(200).json({
        success:true,
        orders
    })
})

const getOrderDetails = asyncHandler(async(req,res,next)=>{
    const order = await order.findById(req.params.id).populate('user', 'name');
    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }
    res.status(200).json({
        success:true,
        order
        })
})

const getAdminOrder = asyncHandler(async(req, res, next)=>{
    const orders = await order.find({}).populate('user', 'name');
    res.status(200).json({
        success:true,
        orders
    })
})

const processOrder = asyncHandler(async(req, res, next)=>{
    const order = await order.findById(req.params.id).populate
    if(!order){
        res.status(400)
        throw new Error('Order not found')
    } 
    if(order.orderStatus === 'preparing'){
        order.orderStatus = 'shipped'
    }
    else if(order.orderStatus === 'shipped'){
        order.orderStatus = 'delivered'
        order.deliveredAt = new Date(Date.now())
        }
        else if(order.orderStatus === 'delivered') return next( new Error('food already delivered'));
        await order.save()
    res.status(200).json({
        success:true,
        message: 'satus updated succesfully' 
    })
})





module.exports = {placeOrder, getOrder, getOrderDetails, getAdminOrder, processOrder}