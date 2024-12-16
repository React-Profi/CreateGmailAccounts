import { BaseCustomError } from './BaseCustomError';

export class BotControllerError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'BotController',
				message,
				throwSystemMessage
			)
		);
	}
}
