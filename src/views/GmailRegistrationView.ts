import { IGmailRegistrationView } from '../interfaces/IGmailRegistrationView';
export class GmailRegistrationView implements IGmailRegistrationView {
	log(message: string): void {
		console.log(`[LOG]: ${message}`);
	}

	error(message: string): void {
		console.error(`[ERROR]: ${message}`);
	}

	success(message: string): void {
		console.log(`[SUCCESS]: ${message}`);
	}
}
