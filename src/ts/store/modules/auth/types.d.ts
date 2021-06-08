import UserModel from "@/ts/models/userClass";

export interface AuthState {
  userData?: UserModel;
  loading: Boolean;
  verifying: string | null;
  fetched: {
    userData_try?: number
  }
}
