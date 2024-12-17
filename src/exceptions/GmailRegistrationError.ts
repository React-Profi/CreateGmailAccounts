import { BaseCustomError } from './BaseCustomError';

export class GmailRegistrationError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'GmailRegistration',
				message,
				throwSystemMessage
			)
		);
	}
}
