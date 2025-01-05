import { BaseCustomError } from './BaseCustomError';

export class GmailRegistrationControllerError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'GmailRegistrationController',
				message,
				throwSystemMessage
			)
		);
	}
}
