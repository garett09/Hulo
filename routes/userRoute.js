const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile
} = require("../controllers/userCtrl");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route('/me').get(isAuthenticatedUser, getUserProfile);

module.exports = router;
