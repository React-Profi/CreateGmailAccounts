import { Browser, Page } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { StealthBrowserManagerError } from './exceptions/StealthBrowserManagerError';
import { IBrowserConfig } from './interfaces/IBrowserConfig';
import { IStealthBrowserManager } from './interfaces/IStealthBrowserManager';

puppeteer.use(StealthPlugin());

export class StealthBrowserManager implements IStealthBrowserManager {
	private browser: Browser | null = null;
	private page: Page | null = null;
	private config: IBrowserConfig;

	constructor(config: IBrowserConfig) {
		this.config = config;
	}

	async launch(): Promise<Page> {
		try {
			const config = this.config.generateBrowserConfig();
			if (!config)
				throw new StealthBrowserManagerError('Invalid browser configuration.');

			this.browser = await puppeteer.launch({
				headless: false,
				args: config.args,
				defaultViewport: config.defaultViewport
			});

			this.page = await this.browser.newPage();
			await this.page.setUserAgent(config.userAgent);
			await this.page.setExtraHTTPHeaders({ 'Accept-Language': config.lang });
			await this.page.emulateTimezone('Europe/Moscow');

			return this.page;
		} catch (error) {
			throw new StealthBrowserManagerError(
				'Failed to launch browser',
				(error as Error).message
			);
		}
	}

	async close(): Promise<void> {
		if (this.browser) await this.browser.close();
	}

	getPage(): Page {
		if (!this.page)
			throw new StealthBrowserManagerError('Page not initialized.');
		return this.page;
	}
}
