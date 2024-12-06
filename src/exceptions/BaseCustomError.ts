export class BaseCustomError extends Error {
  constructor(message: string) {
    super(`${message}`);
  }
}
