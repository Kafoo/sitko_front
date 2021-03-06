import AuthorModel from "@/ts/models/authorClass";
import NoteModel from "@/ts/models/noteClass";
import imageable from "@/ts/mixins/imageable";
import taggable from "@/ts/mixins/taggable";
import linkable from "@/ts/mixins/linkable";
import mix from "@/ts/mixins/_mix";
import globalModel from "@/ts/models/globalClass";
import visiable from "../mixins/visiable";

export default class PlaceModel extends mix(globalModel).with(
  imageable,
  taggable,
  linkable,
  visiable
) {
  id?: number;
  essence: string;
  name: string;
  description: string;
  projects_count: number;
  contact_infos: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
  };
  author: AuthorModel;
  notes: Array<NoteModel>;
  path: string;
  location: Object | null;

  constructor(rawData: any = {}) {
    super(rawData);
    this.id = rawData.id;
    this.essence = "place";
    this.name = rawData.name || "";
    this.description = rawData.description || "";

    this.path = "/place/" + this.id;

    if (rawData.author) {
      this.author = new AuthorModel(rawData.author);
    } else {
      this.author = new AuthorModel();
    }

    this.contact_infos = { ...rawData.contact_infos };

    this.notes = [];
    if (rawData.notes) {
      rawData.notes.forEach((note: NoteModel) => {
        this.notes.push(new NoteModel(note));
      });
    }

    this.projects_count = rawData.projects_count;
    this.events_count = rawData.events_count;


    if (rawData.location) {
      if (typeof rawData.location == "string") {
        this.location = JSON.parse(rawData.location);
      } else {
        this.location = rawData.location;
      }
    } else {
      this.location = null;
    }
  }
}
