import PlaceModel from "@/ts/models/placeClass";
import i18n from "@/ts/plugins/i18n.js";
import imageable from "../mixins/imageable";
import taggable from "../mixins/taggable";
import linkable from "../mixins/linkable";
import mix from "@/ts/mixins/_mix";
import globalModel from "./globalClass";

export default class UserModel extends mix(globalModel).with(
  imageable,
  taggable,
  linkable
) {
  id: number;
  essence:string;
  name: string;
  last_name?: string;
  email: string;
  bio: string;
  expectations: string;
  user_type: number;
  home_type: number;
  contact_infos: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
  };
  preferences: {
    email?: {
      links?: boolean
    }
  };
  email_verified_at?: string;
  password?: string;
  password_confirmation?: string;
  place?: PlaceModel;
  path: string;

  constructor(rawData: any = {}) {

    super(rawData);
    this.id = rawData.id;
    this.essence = "user"
    this.name = rawData.name || i18n.t("an old user");
    this.last_name = rawData.last_name || "";
    this.email = rawData.email || "";
    this.bio = rawData.bio || "";
    this.expectations = rawData.expectations || "";

    this.user_type = rawData.user_type
    this.home_type = rawData.home_type

    this.contact_infos = {...rawData.contact_infos}
    this.preferences = {...rawData.preferences}
    this.email_verified_at = rawData.email_verified_at;

    if (rawData.place) {
      this.place = new PlaceModel(rawData.place);
    }

    this.password = "";
    this.password_confirmation = "";

    this.path = "/user/" + this.id;
  }
}
