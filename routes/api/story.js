const router = require("express").Router();
const storyController = require("../../controllers/story");

// Matches with "/api/story"
// router.route("/")


// Matches with "/api/story/:id"
router
  .route("/all")
  .get(storyController.findAll)
  .get(storyController.findById)
  .put(storyController.update)
  // .delete(storyController.remove);


  // router
  // .route("/all")
  // .get(storyController.findAll)
module.exports = router;
