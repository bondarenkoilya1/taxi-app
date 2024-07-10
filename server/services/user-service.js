const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const mailService = require("../services/mail-service");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error(`User with email ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = crypto.randomUUID();
    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    await mailService.sentActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
