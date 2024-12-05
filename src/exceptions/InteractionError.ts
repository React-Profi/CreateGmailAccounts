import { BaseCustomError } from "./BaseCustomError";

export class InteractionError extends BaseCustomError {
  constructor(message: string, selector?: string) {
    const detailedMessage = selector
      ? `${message} (Selector: ${selector})`
      : message;
    super(detailedMessage, "InteractionError");
  }
}

/*
Ошибка взаимодействия возникает, если бот не может корректно выполнить операцию на веб-странице, например, найти элемент или выполнить клик.

Примеры
Селектор недоступен (элемент не найден).
Ошибка при клике или вводе текста.
Слишком долгий таймаут ожидания элемента.
*/
