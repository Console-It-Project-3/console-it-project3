const router = require("express").Router();
const userController = require("../../controllers/user");

// console.log("heres the controller", userController);

// Matches with "/api/user"
// router.route("/")
  

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .post(userController.create)
  .put(userController.update)

module.exports = router;
