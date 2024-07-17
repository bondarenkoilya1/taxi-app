const userService = require("../services/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

class UserController {
  async registration(request, response, next) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Error during validation", errors.array()));
      }

      const { email, password } = request.body;
      const userData = await userService.registration(email, password);

      response.cookie("refreshToken", userData.refreshToken, {
        maxAge: THIRTY_DAYS,
        httpOnly: true
      });

      return response.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(request, response, next) {
    try {
      const { email, password } = request.body;

      const userData = await userService.login(email, password);

      response.cookie("refreshToken", userData.refreshToken, {
        maxAge: THIRTY_DAYS,
        httpOnly: true
      });

      return response.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(request, response, next) {
    try {
      const { refreshToken } = request.cookies;
      const token = await userService.logout(refreshToken);
      response.clearCookie("refreshToken", token);

      return response.status(200).send("Logout successful");
    } catch (error) {
      next(error);
    }
  }

  async activate(request, response, next) {
    try {
      const activationLink = request.params.link;
      await userService.activate(activationLink);

      return response.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(request, response, next) {
    try {
      const { refreshToken } = request.cookies;

      const userData = await userService.refresh(refreshToken);

      response.cookie("refreshToken", userData.refreshToken, {
        maxAge: THIRTY_DAYS,
        httpOnly: true
      });

      return response.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async resendActivationLink(request, response, next) {
    try {
      const { email } = request.body;

      await userService.resendActivationLink(email);

      return response.status(200).send("The activation link was sent successfully");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
