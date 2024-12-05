import { BaseCustomError } from "./BaseCustomError";

export class DataLoaderError extends BaseCustomError {
  constructor(message: string) {
    super(message, "DataLoaderError");
  }
}

/*
Обрабатывает ошибки, возникающие при загрузке данных с использованием класса DataLoader.

Отвечает за ошибки, связанные с обработкой файлов или загрузкой данных.

Структурирует ошибки, которые возникают из-за отсутствия файлов или их некорректного формата.

например:

Отсутствие файла.
Неверный формат данных.
Пустые файлы или некорректное содержимое
*/
