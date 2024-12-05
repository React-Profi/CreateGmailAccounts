import { BaseCustomError } from "./BaseCustomError";

// Ошибка, связанная с логикой BotController
export class BotControllerError extends BaseCustomError {
  constructor(message: string, details?: string) {
    const detailedMessage = details
      ? `${message} (Details: ${details})`
      : message;
    super(detailedMessage, "BotControllerError");
  }
}

/*
Применяется, когда ошибка связана с процессами, выполняемыми в контроллере, например:
Невозможность запустить браузер.

Ошибка навигации на URL.
Проблемы с конфигурацией.
Позволяет локализовать проблему в конкретном компоненте (контроллере).
*/
