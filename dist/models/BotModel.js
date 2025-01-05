"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModel = void 0;
const BotModelError_1 = require("../exceptions/BotModelError");
class BotModel {
    constructor() {
        this.registrationUrl =
            "https://www.gmail.com/mail/help/intl/ru/about.html?de";
        this.createAccountButtonSelector = "a#gmail-create-account"; // Селектор кнопки
    }
    getRegistrationUrl() {
        if (!this.registrationUrl) {
            throw new BotModelError_1.BotModelError("Не задан URL для регистрации.");
        }
        return this.registrationUrl;
    }
    getCreateAccountButtonSelector() {
        if (!this.createAccountButtonSelector) {
            throw new BotModelError_1.BotModelError("Не задан селектор кнопки создания аккаунта.");
        }
        return this.createAccountButtonSelector;
    }
}
exports.default = BotModel;
exports.BotModel = BotModel;
