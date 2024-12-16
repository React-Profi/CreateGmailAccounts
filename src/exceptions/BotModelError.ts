import { BaseCustomError } from './BaseCustomError';

export class BotModelError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage('BotModel', message, throwSystemMessage)
		);
	}
}
