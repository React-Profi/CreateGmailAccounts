export class BaseCustomError extends Error {
	constructor(message: string) {
		super(message);
	}

	/**
	 * Генерация форматированного сообщения об ошибке.
	 * @param className Имя класса, где произошло исключение.
	 * @param message Описание ошибки.
	 * @param throwSystemMessage Системное сообщение, если есть.
	 * @returns {string} Сформированное сообщение об ошибке.
	 */
	static formatMessage(
		className: string,
		message: string,
		throwSystemMessage: string = ''
	): string {
		return `\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе ${className}.                                !
  !${message}
  !${
		throwSystemMessage
			? `Системное сообщение: ${throwSystemMessage}`
			: 'Прокинутое исключение, после срабатывания моего другого исключения'
	}
  !----------------------------------------------------------------------------------!
      `;
	}
}
