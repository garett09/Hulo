const express = require('express')
const router = express.Router();
const auth = require("../middleware/auth");

const {registerUser, loginUser, logoutUser} = require ('../controllers/userCtrl')

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/logout').get(logoutUser)

module.exports = router;



