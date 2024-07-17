const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const mailService = require("../services/mail-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async generateAndSaveTokens(user) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    };
  }

  async findUserByEmail(email, shouldExist = true) {
    const user = await UserModel.findOne({ email });

    if (shouldExist && !user) {
      throw ApiError.BadRequest(`User with email ${email} was not found`);
    }

    if (!shouldExist && user) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }

    return user;
  }

  generateActivationLink() {
    return crypto.randomUUID();
  }

  async registration(email, password) {
    await this.findUserByEmail(email, false);

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = this.generateActivationLink();
    const user = await UserModel.create({ email, password: hashPassword, activationLink });

    await mailService.sentActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    return this.generateAndSaveTokens(user);
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });

    if (!user) {
      throw ApiError.BadRequest("Wrong activation link");
    }

    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await this.findUserByEmail(email);

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw ApiError.BadRequest(`Wrong password`);
    }

    return this.generateAndSaveTokens(user);
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);

    return this.generateAndSaveTokens(user);
  }

  async resendActivationLink(email) {
    const user = await this.findUserByEmail(email);

    console.log(user.isActivated);

    if (user.isActivated) {
      throw ApiError.BadRequest("Account is already activated");
    }

    const activationLink = this.generateActivationLink();
    user.activationLink = activationLink;

    await user.save();

    await mailService.sentActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
  }
}

module.exports = new UserService();
