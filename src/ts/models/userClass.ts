import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";
import PlaceModel from "@/ts/models/placeClass";
import i18n from "@/ts/plugins/i18n.js";
import TaggableModel from "@/ts/models/taggableClass";

export default class UserModel extends TaggableModel {
  id: number;
  name: string;
  last_name?: string;
  email: string;
  email_verified_at?: string;
  password?: string;
  password_confirmation?: string;
  image?: ImageModel | String;
  place?: PlaceModel;

  constructor(rawData: any = {}) {
    super(rawData)
    this.id = rawData.id;
    this.name = rawData.name || i18n.t("an old user");
    this.last_name = rawData.last_name || "";
    this.email = rawData.email || "";
    this.email_verified_at = rawData.email_verified_at;

    this.place = rawData.place;

    this.password = "";
    this.password_confirmation = "";

    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    } else {
      this.image = undefined;
    }

  }
}
