const router = require("express").Router();
const equipmentController = require("../../controllers/equipment");

// Matches with "/api/equipment"
// router.route("/")


// Matches with "/api/equipment/:id"
router
  .route("/all")
  .get(equipmentController.findAll)
  .get(equipmentController.findById)
  .put(equipmentController.update)

// router
//   .route("/all")
//   .get(equipmentController.findAll)
module.exports = router;
