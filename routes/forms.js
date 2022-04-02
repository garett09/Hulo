const express = require("express");
const router = express.Router();

const {
  newForm,
  myForms,
  getSingleForm,
  allForms,
  updateForm,
  deleteForm
} = require("../controllers/formCtrl");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/form/new").post(isAuthenticatedUser, newForm);

router.route("/form/:id").get(isAuthenticatedUser, getSingleForm);
router.route("/forms/me").get(isAuthenticatedUser, myForms);

router
  .route("/admin/forms/all")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allForms);
router
  .route("/admin/forms/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateForm)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteForm);

module.exports = router;
