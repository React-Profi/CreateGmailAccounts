/**
 * Интерфейс для загрузки данных User-Agent'ов и языков
 */
export interface IDataLoader {
	/**
	 * Метод для загрузки User-Agent'ов
	 * @returns {string[]} Массив строк с User-Agent'ами
	 */
	loadUserAgents(): string[];
	/**
	 * Метод для загрузки обозначения языка
	 * @returns {string[]} Массив строк с обозначениями языков
	 */
	loadLanguages(): string[];
}
