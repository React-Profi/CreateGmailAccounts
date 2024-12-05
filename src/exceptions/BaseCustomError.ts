export class BaseCustomError extends Error {
  public readonly name: string;

  constructor(message: string, name = "BaseCustomError") {
    super(message);
    this.name = name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
