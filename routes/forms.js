const express = require("express");
const router = express.Router();

const {
  getAllForms,
  newForm,
  getSingleForm,
  updateForm,
  deleteForm,
} = require("../controllers/formCtrl");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/forms").get(isAuthenticatedUser, getAllForms);

router.route("/forms/:id").get(getSingleForm);

router
  .route("/admin/forms/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newForm);

router
  .route("/admin/forms/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateForm)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteForm);

module.exports = router;
