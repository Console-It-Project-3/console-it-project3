const router = require("express").Router();
const characterController = require("../../controllers/character");

// Matches with "/api/character"
// router.route("/")
// for authentication 

// Matches with "/api/character/:id"
router
  .route("/all")
  .get(characterController.findAll)
  .get(characterController.findById)
  .post(characterController.create)
  .put(characterController.update)

  // .delete(characterController.remove);


  router
  .route("/all")

// .delete(characterController.remove);
// router
//   .route("/all")
//   .get(characterController.findAll)

module.exports = router;
