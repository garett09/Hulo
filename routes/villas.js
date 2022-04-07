const express = require("express");
const router = express.Router();

const {
  getAllVillas,
  newVilla,
  getSingleVilla,
  updateVilla,
  deleteVilla,
  getAllAdminVillas,
} = require("../controllers/villaCtrl");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/villas").get( getAllVillas);

router.route("/villas/:id").get(getSingleVilla);

router
  .route("/admin/villas/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newVilla);

router
  .route("/admin/villas/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateVilla)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteVilla);
router
  .route("admin/villas")
  .get(getAllAdminVillas);

module.exports = router;
