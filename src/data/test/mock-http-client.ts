import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: Object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };
  async post(params: HttpPostClient.Params): Promise<HttpResponse> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve(this.response);
  }
}
