export default class BotModel {
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
