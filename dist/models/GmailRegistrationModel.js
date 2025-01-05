"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRegistrationModel = void 0;
const GmailRegistrationModelError_1 = require("../exceptions/GmailRegistrationModelError");
class GmailRegistrationModel {
    constructor() {
        this.registrationUrl =
            'https://www.gmail.com/mail/help/intl/ru/about.html?de';
        this.createAccountButtonSelector = 'a#gmail-create-account'; // Селектор кнопки
    }
    getRegistrationUrl() {
        if (!this.registrationUrl) {
            throw new GmailRegistrationModelError_1.GmailRegistrationModelError('Не задан URL для регистрации.');
        }
        return this.registrationUrl;
    }
    getCreateAccountButtonSelector() {
        if (!this.createAccountButtonSelector) {
            throw new GmailRegistrationModelError_1.GmailRegistrationModelError('Не задан селектор кнопки создания аккаунта.');
        }
        return this.createAccountButtonSelector;
    }
}
exports.GmailRegistrationModel = GmailRegistrationModel;
