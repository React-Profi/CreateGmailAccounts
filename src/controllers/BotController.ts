import { IPageActionHandler } from '../action-orchestrator/interfaces/IPageActionHandler';
import { PageActionHandler } from '../action-orchestrator/PageActionHandler';
import { GmailRegistrationControllerError } from '../exceptions/GmailRegistrationControllerError';
import { IGmailRegistrationController } from '../interfaces/IGmailRegistrationController';
import { IGmailRegistrationModel } from '../interfaces/IGmailRegistrationModel';
import { IGmailRegistrationView } from '../interfaces/IGmailRegistrationView';
import { IStealthBrowserManager } from '../stealth-browser/interfaces/IStealthBrowserManager';

export class GmailRegistrationController
	implements IGmailRegistrationController
{
	private model: IGmailRegistrationModel;
	private view: IGmailRegistrationView;
	private browserManager: IStealthBrowserManager;

	constructor(
		model: IGmailRegistrationModel,
		view: IGmailRegistrationView,
		browserManager: IStealthBrowserManager
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
			const actions: IPageActionHandler = new PageActionHandler(page);

			// Действие для перехода на URL
			await actions.dispatch({
				type: 'navigateToPage',
				payload: { url }
			});

			// Действие для клика по кнопке
			await actions.dispatch({
				type: 'click',
				payload: { selector: buttonSelector }
			});

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
			const actions: IPageActionHandler = new PageActionHandler(page);

			// Действие для перехода на тестовый URL
			await actions.dispatch({
				type: 'navigateToPage',
				payload: { url }
			});

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
