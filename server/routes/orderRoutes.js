const express = require('express');
// const validateToken = require('../middlewares/validateToken');
const { placeOrder, getOrder, getOrderDetails, getAdminOrder, processOrder, placeOrderOnline } = require('../controllers/orderControllers');
const {validateToken, validateAdmin} = require('../middlewares/validateToken');
const router = express.Router();




router.post('/create', placeOrder);
// router.post('/createorderonline', placeOrderOnline)
router.get('/myorder', getOrder);
router.get('/order/:id', getOrderDetails)

// Add admin middleware
router.get('/admin/orders', validateToken,validateAdmin, getAdminOrder);

router.get('/admin/order/:id', validateToken,validateAdmin, processOrder)





module.exports = router;