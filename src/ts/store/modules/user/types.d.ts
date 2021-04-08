import UserModel from "@/ts/models/userClass";
import ImageModel from "@/ts/models/imageClass";

export interface UserState {
  users?: Array;
  user?: UserModel;
  fetched: {
    linked_users?: number;
  };
}
