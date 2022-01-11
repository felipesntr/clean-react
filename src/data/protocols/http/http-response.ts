export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  UNAUTHORIZED = 401,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
