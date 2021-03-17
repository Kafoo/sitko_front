import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";
import TaggableModel from "@/ts/models/taggableClass";
import UserModel from "@/ts/models/userClass";
import NoteModel from "@/ts/models/noteClass"

export default class PlaceModel extends TaggableModel {
  id?: number;
  name: string;
  description: string;
  image?: ImageModel | String;
  projects_count: number;
  author: UserModel;
  joined: Boolean;
  notes: Array<NoteModel>

  constructor(rawData: any = {}) {
    super(rawData)
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;

    this.joined = rawData.joined

    if (rawData.author) {
      this.author = rawData.author;
    } else {
      this.author = new UserModel();
    }

    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    } else {
      this.image = undefined;
    }

    this.notes = []
    if (rawData.notes) {
      rawData.notes.forEach((note:NoteModel) => {
        this.notes.push(new NoteModel(note))
      });
    }

    this.projects_count = rawData.projects_count;
  }
}
