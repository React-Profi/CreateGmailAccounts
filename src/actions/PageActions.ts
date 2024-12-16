import { Page } from 'puppeteer';
import { PageActionsError } from '../exceptions/PageActionsError';
import { IPageActions } from '../interfaces/IPageActions';

class PageActions implements IPageActions {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async navigate(url: string): Promise<void> {
		try {
			await this.page.goto(url, { waitUntil: 'networkidle2' });
		} catch (error) {
			throw new PageActionsError(
				'Failed to navigate to URL',
				(error as Error).message
			);
		}
	}

	async click(selector: string): Promise<void> {
		try {
			await this.page.waitForSelector(selector, { timeout: 5000 });
			await this.page.click(selector);
		} catch (error) {
			throw new PageActionsError(
				'Failed to click the selector',
				(error as Error).message
			);
		}
	}

	async type(selector: string, text: string): Promise<void> {
		try {
			await this.page.waitForSelector(selector);
			for (const char of text) {
				await this.page.type(selector, char);
				await this.delay(50 + Math.random() * 100);
			}
		} catch (error) {
			throw new PageActionsError(
				'Failed to type text',
				(error as Error).message
			);
		}
	}

	private delay(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

export { PageActions };
