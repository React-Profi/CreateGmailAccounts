import { PageActions } from '../actions/PageActions';
import { BotControllerError } from '../exceptions/BotControllerError';
import { IBotModel } from '../interfaces/IBotModel';
import { IBotView } from '../interfaces/IBotView';
import { StealthBrowserManager } from '../stealth-browser/StealthBrowserManager';

class BotController {
	private model: IBotModel;
	private view: IBotView;
	private browserManager: StealthBrowserManager;

	constructor(
		model: IBotModel,
		view: IBotView,
		browserManager: StealthBrowserManager
	) {
		this.model = model;
		this.view = view;
		this.browserManager = browserManager;
	}

	// Основной процесс регистрации
	async run(): Promise<void> {
		try {
			const url = this.model.getRegistrationUrl();
			const buttonSelector = this.model.getCreateAccountButtonSelector();

			const page = await this.browserManager.launch();
			const actions = new PageActions(page);

			await actions.navigate(url);
			await actions.click(buttonSelector);
			this.view.success(`Регистрация начата успешно.`);
		} catch (error) {
			throw new BotControllerError(
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

		try {
			const page = await this.browserManager.launch();
			const actions = new PageActions(page);

			await actions.navigate(url);
			this.view.success(`Успешно перешли на страницу теста: ${url}`);
		} catch (error) {
			throw new BotControllerError(
				'Ошибка во время выполнения теста на детектирование',
				(error as Error).message
			);
		} finally {
			//await this.browserManager.close();
		}
	}
}

export { BotController };
