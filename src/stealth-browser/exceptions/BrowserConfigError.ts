import { BaseCustomError } from './BaseCustomError';

export class BrowserConfigError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'BrowserConfig',
				message,
				throwSystemMessage
			)
		);
	}
}
