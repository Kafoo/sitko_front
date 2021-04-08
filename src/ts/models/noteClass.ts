import PlaceModel from "@/ts/models/placeClass";
import UserModel from "@/ts/models/userClass";
import GlobalModel from "./globalClass";

export default class NoteModel extends GlobalModel {
  id: number;
  essence: string;
  place_id: number;
  title: string;
  description: string;
  place?: PlaceModel;
  path: string;
  author: UserModel;

  constructor(rawData: any = {}) {
    super(rawData)

    this.id = rawData.id;
    this.essence = "note";
    this.place_id = rawData.place_id;

    this.title = rawData.title;
    this.description = rawData.description;

    if (rawData.author) {
      this.author = rawData.author;
    } else {
      this.author = new UserModel();
    }

    this.place = rawData.place;

    this.path = "/note/" + this.id;
  }
}
