import { GmailRegistrationModelError } from '../exceptions/GmailRegistrationModelError';
import { IGmailRegistrationModel } from '../interfaces/IGmailRegistrationModel';

export class GmailRegistrationModel implements IGmailRegistrationModel {
	private registrationUrl: string;
	private createAccountButtonSelector: string;

	constructor() {
		this.registrationUrl =
			'https://www.gmail.com/mail/help/intl/ru/about.html?de';
		this.createAccountButtonSelector = 'a#gmail-create-account'; // Селектор кнопки
	}

	getRegistrationUrl(): string {
		if (!this.registrationUrl) {
			throw new GmailRegistrationModelError('Не задан URL для регистрации.');
		}
		return this.registrationUrl;
	}

	getCreateAccountButtonSelector(): string {
		if (!this.createAccountButtonSelector) {
			throw new GmailRegistrationModelError(
				'Не задан селектор кнопки создания аккаунта.'
			);
		}
		return this.createAccountButtonSelector;
	}
}
