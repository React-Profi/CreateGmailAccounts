import { PageActions } from '../actions/PageActions';
import { GmailRegistrationControllerError } from '../exceptions/GmailRegistrationControllerError';
import { IGmailRegistrationController } from '../interfaces/IGmailRegistrationController';
import { IGmailRegistrationModel } from '../interfaces/IGmailRegistrationModel';
import { IGmailRegistrationView } from '../interfaces/IGmailRegistrationView';
import { StealthBrowserManager } from '../stealth-browser/StealthBrowserManager';

export class GmailRegistrationController
	implements IGmailRegistrationController
{
	private model: IGmailRegistrationModel;
	private view: IGmailRegistrationView;
	private browserManager: StealthBrowserManager;

	constructor(
		model: IGmailRegistrationModel,
		view: IGmailRegistrationView,
		browserManager: StealthBrowserManager
	) {
		this.model = model;
		this.view = view;
		this.browserManager = browserManager;
	}

	// Основной процесс регистрации
	async run(): Promise<void> {
		if (true) {
			this.runDetectTest();
			return;
		}
		try {
			const url = this.model.getRegistrationUrl();
			const buttonSelector = this.model.getCreateAccountButtonSelector();

			const page = await this.browserManager.launch();
			const actions = new PageActions(page);

			await actions.navigate(url);
			await actions.click(buttonSelector);
			this.view.success(`Регистрация начата успешно.`);
		} catch (error) {
			throw new GmailRegistrationControllerError(
				'Ошибка во время процесса регистрации',
				(error as Error).message
			);
		} finally {
			await this.browserManager.close();
		}
	}

	// Тест на детектирование
	async runDetectTest(): Promise<void> {
		const url = 'https://bot.sannysoft.com/';
		//const url = "https://amiunique.org/fingerprint";

		try {
			const page = await this.browserManager.launch();
			const actions = new PageActions(page);

			await actions.navigate(url);
			this.view.success(`Успешно перешли на страницу теста: ${url}`);
		} catch (error) {
			throw new GmailRegistrationControllerError(
				'Ошибка во время выполнения теста на детектирование',
				(error as Error).message
			);
		} finally {
			//await this.browserManager.close();
		}
	}
}
