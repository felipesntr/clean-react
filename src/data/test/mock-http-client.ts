import { HttpPostClient } from "../protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: Object;
  async post(params: HttpPostClient.Params): Promise<void> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve();
  }
}
