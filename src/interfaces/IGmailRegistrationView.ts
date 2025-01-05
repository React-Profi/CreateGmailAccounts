/**
 * Интерфейс для отображения сообщений различного уровня важности (лог, ошибка, успех).
 * В нашем случае это интерфейс пользователя визуальная часть (в каком-то смысле заглушка)
 */
export interface IGmailRegistrationView {
	/**
	 * Логирует информационное сообщение
	 * @param {string} message Сообщение для логирования
	 */
	log(message: string): void;
	/**
	 * Логирует сообщение об ошибке
	 * @param {string} message Сообщение об ошибке
	 */
	error(message: string): void;
	/**
	 * Логирует сообщение о успешном выполнении
	 * @param {string} message Сообщение о успехе
	 */
	success(message: string): void;
}
