import { IBrowserConfigResult } from './IBrowserConfigResult';

/**
 * Интерфейс для класса конфигурации браузера.
 */
export interface IBrowserConfig {
	/**
	 * Генерирует конфигурацию для запуска браузера.
	 *
	 * @returns Объект конфигурации браузера или `null`, если конфигурация не может быть сгенерирована.

	 */
	generateBrowserConfig(): IBrowserConfigResult | null;
}
