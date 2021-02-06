import ImageModel from "@/ts/models/imageClass";
import CaldateModel from "@/ts/models/caldateClass";
import TagModel from "@/ts/models/tagClass";

export default class Event {
  id: number;
  place_id: number;
  title: string;
  description: string;
  image?: ImageModel;
  expanded: boolean;
  caldates: Array<CaldateModel>;
  tags: Array<TagModel>;

  constructor(rawData: any = {}) {
    this.id = rawData.id;
    this.place_id = rawData.place_id;
    this.title = rawData.title;
    this.description = rawData.description;

    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    } else {
      this.image = undefined;
    }

    this.expanded = false;

    this.caldates = [];

    if (rawData.caldates) {
      rawData.caldates.forEach((caldate: any) => {
        this.caldates.push(new CaldateModel(caldate));
      });
    }

    this.tags = [];
    if (rawData.tags) {
      rawData.tags.forEach((tag: TagModel) => {
        this.tags.push(new TagModel(tag));
      });
    }
  }

  get bigtitle(): string {
    return this.title.toUpperCase();
  }

  get color(): string {
    return "blue darken-3";
  }
}
