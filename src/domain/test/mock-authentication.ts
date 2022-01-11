import faker from "@withshepherd/faker";
import { Authentication } from "../usecases/authentication";

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
