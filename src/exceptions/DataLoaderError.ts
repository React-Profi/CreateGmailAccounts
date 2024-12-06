import { BaseCustomError } from "./BaseCustomError";

export class DataLoaderError extends BaseCustomError {
  constructor(message: string, throwSystemMessage: string = "") {
    super(`\n
  !----------------------------------------------------------------------------------!
  !\t\tИсключение упало в классе DataLoader.                                !
  !${message}
  !${throwSystemMessage ? `Системное сообщение: ${throwSystemMessage}` : ""}
  !----------------------------------------------------------------------------------!
      `);
  }
}
