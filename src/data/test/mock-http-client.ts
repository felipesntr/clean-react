import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http";

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };
  async post(params: HttpPostClient.Params<T>): Promise<HttpResponse<R>> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve(this.response);
  }
}
