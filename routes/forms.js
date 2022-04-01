const express = require("express");
const router = express.Router();

const {
  getAllForms,
  newForm,
  getSingleForm,
  updateForm,
  deleteForm,
} = require("../controllers/formCtrl");

const {isAuthenticatedUser} = require('../middleware/auth');

router.route("/forms").get(isAuthenticatedUser, getAllForms);

router.route("/forms/:id").get(getSingleForm);

router.route("/admin/forms/new").post(newForm);

router.route("/admin/forms/:id").put(updateForm).delete(deleteForm);

module.exports = router;
