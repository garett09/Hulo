const express = require('express')
const router = express.Router();
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

const {registerUser} = require ('../controllers/userCtrl')

router.route('/register').post(registerUser)

module.exports = router;



