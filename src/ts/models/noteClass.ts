import PlaceModel from "@/ts/models/placeClass";
import UserModel from "@/ts/models/userClass";

export default class NoteModel {

  id: number;
  place_id: number;
  title: string;
  description: string;
  place?: PlaceModel;
  path: string;
  author: UserModel;

  constructor(rawData: any = {}) {

    this.id = rawData.id;
    this.place_id = rawData.place_id;

    this.title = rawData.title;
    this.description = rawData.description;

    if (rawData.author) {
      this.author = rawData.author;
    } else {
      this.author = new UserModel();
    }

    this.place = rawData.place;

    this.path = '/note/'+this.id

  }


}