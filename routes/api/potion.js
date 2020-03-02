const router = require("express").Router();
const potionController = require("../../controllers/potion");

// Matches with "/api/potion"
// router.route("/")


// Matches with "/api/potion/:id"
router
  .route("/all")
  .get(potionController.findAll)
  .get(potionController.findById)
  .put(potionController.update)
// .delete(potionController.remove)
// router
//   .route("/all")
//   .get(potionController.findAll)

module.exports = router;
