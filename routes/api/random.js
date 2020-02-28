const router = require("express").Router();
const randomController = require("../../controllers/random");

// Matches with "/api/random"
// router.route("/")


// Matches with "/api/random/:id"
router
  .route("/all")
  .get(randomController.findAll)
  .get(randomController.findById)
  .put(randomController.update)

// router
//   .route("/all")
//   .get(randomController.findAll)
module.exports = router;
