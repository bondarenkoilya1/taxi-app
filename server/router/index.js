const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isStrongPassword(),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/resend-activation", userController.resendActivationLink);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

module.exports = router;
