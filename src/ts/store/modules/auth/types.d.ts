import UserModel from "@/ts/models/userClass";

export interface AuthState {
  userData?: UserModel;
  loading: Boolean;
}
