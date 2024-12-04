"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModel = void 0;
class BotModel {
    constructor() {
        this.registrationUrl =
            "https://www.gmail.com/mail/help/intl/ru/about.html?de";
        this.createAccountButtonSelector = "a#gmail-create-account"; // Селектор кнопки
    }
    getRegistrationUrl() {
        return this.registrationUrl;
    }
    getCreateAccountButtonSelector() {
        return this.createAccountButtonSelector;
    }
}
exports.default = BotModel;
exports.BotModel = BotModel;
