import PlaceModel from "@/ts/models/placeClass";
import AuthorModel from "@/ts/models/authorClass";
import imageable from "../mixins/imageable";
import taggable from "../mixins/taggable";
import mix from "@/ts/mixins/_mix";
import caldatable from "../mixins/caldatable";
import GlobalModel from "./globalClass";
import visiable from "../mixins/visiable";

export default class ProjentModel extends mix(GlobalModel).with(
  imageable,
  taggable,
  caldatable,
  visiable
) {
  id: number;
  place_id: number;
  title: string;
  description: string;
  place?: PlaceModel;
  author: AuthorModel;
  current: boolean;

  constructor(rawData: any = {}) {
    super(rawData);

    this.id = rawData.id;
    this.place_id = rawData.place_id;

    //current attribute is determined in project/event classes
    this.current = false;

    if (rawData.author) {
      this.author = new AuthorModel(rawData.author);
    } else {
      this.author = new AuthorModel();
    }

    this.title = rawData.title;
    this.description = rawData.description;

    this.place = new PlaceModel(rawData.place);
  }
  
}
