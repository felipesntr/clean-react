import { Account } from "@/domain/entities/account";

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Account>;
}

namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };
}
