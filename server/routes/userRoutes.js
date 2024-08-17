const express = require('express');
const { createUser, loginUser, logoutUser, myProfile } = require('../controllers/userControllers');
const {validateToken} = require('../middlewares/validateToken');
const router = express.Router();



router.post('/createUser', createUser);
router.get('/login', loginUser);
router.get('/logout',validateToken, logoutUser);
router.get('/me',validateToken, myProfile)


module.exports = router