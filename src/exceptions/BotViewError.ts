import { BaseCustomError } from './BaseCustomError';

export class DataLoaderError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage('BotView', message, throwSystemMessage)
		);
	}
}
