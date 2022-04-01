const express = require('express')
const router = express.Router();
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const {registerUser, loginUser} = require ('../controllers/userCtrl')

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

module.exports = router;



