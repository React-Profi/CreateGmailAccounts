import { BaseCustomError } from './BaseCustomError';

export class StealthBrowserManagerError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'StealthBrowserManager',
				message,
				throwSystemMessage
			)
		);
	}
}
