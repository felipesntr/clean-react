export enum HttpStatusCode {
  OK = 200,
  noContent = 404,
  UNAUTHORIZED = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
