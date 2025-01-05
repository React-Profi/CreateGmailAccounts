import { Page } from 'puppeteer';

export interface IStealthBrowserManager {
	/**
	 * Запускает браузер и возвращает экземпляр страницы.
	 * @returns {Promise<Page>} Экземпляр страницы Puppeteer.
	 */
	launch(): Promise<Page>;

	/**
	 * Закрывает браузер, если он запущен.
	 * @returns {Promise<void>}
	 */
	close(): Promise<void>;
}
