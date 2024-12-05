import { BaseCustomError } from "./BaseCustomError";

export class ValidationError extends BaseCustomError {
  constructor(message: string) {
    super(message, "ValidationError");
  }
}

/*
Этот класс используется для обработки ошибок валидации, например, проверки входных данных или результатов выполнения методов.

Используется для обработки ошибок, связанных с некорректными данными:

Неверный селектор элемента.
Некорректный формат входных параметров.
Ошибка проверки состояния объектов или результатов.
*/
