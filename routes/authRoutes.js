const express = require('express');
const router = express.Router();
const { userLogin,adminLogin,userLogout,adminLogout} = require('../controllers/authControllers');



router.post('/userlogin', userLogin);
router.post('/adminlogin', adminLogin);
router.get('/userlogout', userLogout);
router.get('/adminlogout', adminLogout);




module.exports = router;