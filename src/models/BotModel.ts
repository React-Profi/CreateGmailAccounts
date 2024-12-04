import { IBotModel } from "../interfaces/IBotModel";

export default class BotModel implements IBotModel {
  private registrationUrl: string;
  private createAccountButtonSelector: string;

  constructor() {
    this.registrationUrl =
      "https://www.gmail.com/mail/help/intl/ru/about.html?de";
    this.createAccountButtonSelector = "a#gmail-create-account"; // Селектор кнопки
  }

  getRegistrationUrl(): string {
    return this.registrationUrl;
  }

  getCreateAccountButtonSelector(): string {
    return this.createAccountButtonSelector;
  }
}

export { BotModel };
