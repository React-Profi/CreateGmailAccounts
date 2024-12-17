import { BaseCustomError } from './BaseCustomError';

export class GmailRegistrationModelError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'GmailRegistrationModel',
				message,
				throwSystemMessage
			)
		);
	}
}
