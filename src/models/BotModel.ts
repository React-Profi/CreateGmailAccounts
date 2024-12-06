import { IBotModel } from "../interfaces/IBotModel";
import { BotModelError } from "../exceptions/BotModelError";

export default class BotModel implements IBotModel {
  private registrationUrl: string;
  private createAccountButtonSelector: string;

  constructor() {
    this.registrationUrl =
      "https://www.gmail.com/mail/help/intl/ru/about.html?de";
    this.createAccountButtonSelector = "a#gmail-create-account"; // Селектор кнопки
  }

  getRegistrationUrl(): string {
    if (!this.registrationUrl) {
      throw new BotModelError("Не задан URL для регистрации.");
    }
    return this.registrationUrl;
  }

  getCreateAccountButtonSelector(): string {
    if (!this.createAccountButtonSelector) {
      throw new BotModelError("Не задан селектор кнопки создания аккаунта.");
    }
    return this.createAccountButtonSelector;
  }
}

export { BotModel };
