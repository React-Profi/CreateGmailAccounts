/**
 * Интерфейс для управления ботом.
 */
export interface IGmailRegistrationController {
	/**
	 * Запускает основной процесс регистрации.
	 * @returns {Promise<void>}
	 */
	run(): Promise<void>;
}
