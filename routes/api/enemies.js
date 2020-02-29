const router = require("express").Router();
const enemiesController = require("../../controllers/enemies");

// Matches with "/api/enemies"
// router.route("/")


// Matches with "/api/enemies/:id"
router
  .route("/all")
  .get(enemiesController.findAll)
  .get(enemiesController.findById)
  .put(enemiesController.update)
// .delete(enemiesController.remove)
// router
//   .route("/all")
//   .get(enemiesController.findAll)
module.exports = router;
