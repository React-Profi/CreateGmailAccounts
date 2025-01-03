import { BaseCustomError } from './BaseCustomError';

export class PageActionHandlerError extends BaseCustomError {
	constructor(message: string, throwSystemMessage: string = '') {
		super(
			BaseCustomError.formatMessage(
				'PageActionHandler',
				message,
				throwSystemMessage
			)
		);
	}
}
