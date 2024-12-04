export interface IBotView {
  log(message: string): void;
  error(message: string): void;
  success(message: string): void;
}
