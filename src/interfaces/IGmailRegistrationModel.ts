/**
 * Интерфейс для модели бота, определяет методы, которые должна реализовать модель
 */
export interface IGmailRegistrationModel {
	/**
	 * Метод для получения URL страницы регистрации
	 * @returns {string} URL для страницы регистрации
	 */
	getRegistrationUrl(): string;

	/**
	 * Метод для получения селектора кнопки создания аккаунта
	 * @returns {string} Селектор кнопки для создания аккаунта
	 */
	getCreateAccountButtonSelector(): string;
}
