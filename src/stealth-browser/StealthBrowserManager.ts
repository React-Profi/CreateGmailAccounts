import puppeteer, { Browser, Page } from 'puppeteer';
import { StealthBrowserManagerError } from './exceptions/StealthBrowserManagerError';
import { IBrowserConfig } from './interfaces/IBrowserConfig';
import { IStealthBrowserManager } from './interfaces/IStealthBrowserManager';

export class StealthBrowserManager implements IStealthBrowserManager {
	private browser: Browser | null = null;
	private page: Page | null = null;
	private config: IBrowserConfig;

	constructor(config: IBrowserConfig) {
		this.config = config;
	}

	async launch(): Promise<Page> {
		try {
			// Генерация конфигурации браузера
			const config = this.config.generateBrowserConfig();
			if (!config)
				throw new StealthBrowserManagerError('Invalid browser configuration.');

			// Запуск браузера с настройками
			this.browser = await puppeteer.launch({
				headless: false,
				args: config.args,
				defaultViewport: config.defaultViewport
			});

			// Создание новой страницы
			this.page = await this.browser.newPage();

			// Установка пользовательских параметров страницы
			await this.page.setUserAgent(config.userAgent);
			await this.page.setExtraHTTPHeaders({ 'Accept-Language': config.lang });
			await this.page.emulateTimezone('Europe/Moscow');

			// Интеграция анти-детект
			await this.addAntiDetect(this.page);

			return this.page;
		} catch (error) {
			throw new StealthBrowserManagerError(
				'Failed to launch browser',
				(error as Error).message
			);
		}
	}

	private async addAntiDetect(page: Page): Promise<void> {
		await page.evaluateOnNewDocument(() => {
			// Убираем свойство `navigator.webdriver`
			Object.defineProperty(navigator, 'webdriver', {
				get: () => false
			});

			// Эмулируем платформу устройства
			Object.defineProperty(navigator, 'platform', {
				get: () => 'Win32'
			});

			// Добавляем фиктивные языки
			Object.defineProperty(navigator, 'languages', {
				get: () => ['en-US', 'ru']
			});

			// Добавляем фиктивные плагины
			Object.defineProperty(navigator, 'plugins', {
				get: () => [1, 2, 3]
			});

			// Подменяем метод navigator.permissions.query
			const originalQuery = window.navigator.permissions.query;
			window.navigator.permissions.query = async parameters => {
				// Проверяем, запрашиваются ли уведомления
				if (parameters.name === 'notifications') {
					// Возвращаем объект, совместимый с PermissionStatus
					return {
						state: 'granted',
						name: 'notifications',
						onchange: null,
						addEventListener: () => {},
						removeEventListener: () => {},
						dispatchEvent: () => false
					} as PermissionStatus;
				}
				// Для остальных типов разрешений вызываем оригинальный метод
				return originalQuery(parameters);
			};

			// Удаляем флаги автоматизации
			Object.defineProperty(navigator, 'hardwareConcurrency', {
				get: () => 4 // Количество потоков процессора
			});
			Object.defineProperty(navigator, 'deviceMemory', {
				get: () => 8 // Память устройства в ГБ
			});
		});
	}

	async close(): Promise<void> {
		// Закрытие браузера
		if (this.browser) await this.browser.close();
	}

	getPage(): Page {
		// Получение текущей страницы
		if (!this.page)
			throw new StealthBrowserManagerError('Page not initialized.');
		return this.page;
	}
}
