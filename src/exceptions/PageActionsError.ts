import { BaseCustomError } from './BaseCustomError';

export class PageActionsError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage('PageActions', message, throwSystemMessage)
		);
	}
}
