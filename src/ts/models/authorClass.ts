import PlaceModel from "@/ts/models/placeClass";
import i18n from "@/ts/plugins/i18n.js";
import imageable from "../mixins/imageable";
import taggable from "../mixins/taggable";
import mix from "@/ts/mixins/_mix";

export default class AuthorModel extends mix().with(imageable) {
  id: number;
  name: string;
  last_name?: string;
  path: string;

  constructor(rawData: any = {}) {
    super(rawData);
    this.id = rawData.id;
    this.name = rawData.name || i18n.t("an old user");
    this.last_name = rawData.last_name || "";
    this.path = "/user/" + this.id;
  }
}
