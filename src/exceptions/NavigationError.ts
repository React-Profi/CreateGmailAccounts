import { BaseCustomError } from "./BaseCustomError";
//Ошибка навигации
export class NavigationError extends BaseCustomError {
  constructor(message: string, url?: string) {
    const detailedMessage = url ? `${message} (URL: ${url})` : message;
    super(detailedMessage, "NavigationError");
  }
}

/*
Ошибка навигации возникает, если бот не может корректно перейти на заданный URL или загрузка страницы завершилась с ошибкой.
Например, если сервер вернул статус 404 или бот застрял на стадии загрузки.

Пример:
Ошибка при вызове page.goto(url).
Некорректный URL.
Проблемы с сетью (например, отсутствие интернета или таймаут подключения).
*/
