import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { Account } from "@/domain/entities/account";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors";
import { Authentication } from "@/domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      Authentication.Params,
      Account
    >
  ) {}
  async auth(params: Authentication.Params): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
