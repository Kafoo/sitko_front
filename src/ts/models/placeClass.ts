import AuthorModel from "@/ts/models/authorClass";
import NoteModel from "@/ts/models/noteClass";
import imageable from "@/ts/mixins/imageable";
import taggable from "@/ts/mixins/taggable";
import linkable from "@/ts/mixins/linkable";
import mix from "@/ts/mixins/_mix";
import globalModel from "@/ts/models/globalClass";

export default class PlaceModel extends mix(globalModel).with(
  imageable,
  taggable,
  linkable
) {
  id?: number;
  essence: string;
  name: string;
  description: string;
  projects_count: number;
  author: AuthorModel;
  notes: Array<NoteModel>;
  path: string;
  localization:Object|null;

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

    this.notes = [];
    if (rawData.notes) {
      rawData.notes.forEach((note: NoteModel) => {
        this.notes.push(new NoteModel(note));
      });
    }

    this.projects_count = rawData.projects_count;
    if (rawData.localization) {
      this.localization = rawData.localization
    } else{
      this.localization = null
    }

  }
}
