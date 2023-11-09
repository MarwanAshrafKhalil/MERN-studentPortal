class CustomError extends Error {
  statusCode: number;
  constructor(statuscode: number, message: string) {
    super(message);
    this.statusCode = statuscode;
  }
}

export function errorHandler(statusCode: number, message: string): CustomError {
  return new CustomError(statusCode, message);
}
