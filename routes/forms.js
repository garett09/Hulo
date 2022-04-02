const express = require("express");
const router = express.Router();

const {newForm } = require('../controllers/formCtrl')

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/form/new').post(isAuthenticatedUser, newForm);

module.exports = router