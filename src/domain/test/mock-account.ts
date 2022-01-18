import faker from "@withshepherd/faker";
import { Authentication } from "@/domain/usecases/authentication";
import { Account } from "../entities/account";

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): Account => ({
  accessToken: faker.datatype.uuid(),
});
