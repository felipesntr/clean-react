import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { InvalidCredentialsError } from "@/domain/errors";
import { Authentication } from "@/domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}
  async auth(params: Authentication.Params): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        return Promise.resolve();
    }
  }
}
