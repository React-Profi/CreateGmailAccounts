import { Page } from 'puppeteer';
import { PageActionHandlerError } from './exceptions/PageActionHandlerError';
import { IPageAction } from './interfaces/IPageAction';
import { IPageActionHandler } from './interfaces/IPageActionHandler';

export class PageActionHandler implements IPageActionHandler {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async dispatch(action: IPageAction): Promise<void> {
		try {
			if (typeof action.payload !== 'object' || action.payload === null) {
				throw new PageActionHandlerError(
					`Параметр payload должен быть объектом и не равен null для действия типа: ${action.type}`,
					''
				);
			}

			switch (action.type) {
				case 'navigateToPage':
					await this.navigateToPage(action.payload.url);
					break;
				case 'click':
					await this.click(action.payload.selector);
					break;
				case 'fillInput':
					await this.fillInput(action.payload.selector, action.payload.text);
					break;
				default:
					throw new PageActionHandlerError(
						`Неизвестный тип действия: ${action.type}`,
						''
					);
			}
		} catch (error) {
			throw new PageActionHandlerError(
				`Не удалось выполнить действие для типа: ${action.type}`,
				(error as Error).message
			);
		}
	}

	async navigateToPage(url: string): Promise<void> {
		try {
			await this.page.goto(url, { waitUntil: 'networkidle2' });
		} catch (error) {
			throw new PageActionHandlerError(
				'Не удалось перейти по URL',
				(error as Error).message
			);
		}
	}

	async click(selector: string): Promise<void> {
		try {
			const locator = this.page.locator(selector);
			locator.setTimeout(5000);
			await locator.click();
		} catch (error) {
			throw new PageActionHandlerError(
				'Не удалось кликнуть на элемент с селектором',
				(error as Error).message
			);
		}
	}

	//TODO: риски и улучшения для обхода анти детект
	async fillInput(selector: string, text: string): Promise<void> {
		try {
			const locator = this.page.locator(selector);
			await locator.click(); // Убедимся, что поле в фокусе
			for (const char of text) {
				if (Math.random() < 0.05) {
					await this.page.keyboard.press('Backspace');
					await this.page.keyboard.type(char);
				} else {
					await this.page.keyboard.type(char, {
						delay: 50 + Math.random() * 50
					});
				}
			}
		} catch (error) {
			throw new PageActionHandlerError(
				'Не удалось ввести текст в элемент',
				(error as Error).message
			);
		}
	}

	private delay(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
