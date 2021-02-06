import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";
import ProjectModel from "@/ts/models/projectClass";
import store from "@/ts/store";

export default class PlaceModel {
  id?: number;
  name: string;
  description: string;
  image?: ImageModel | String;
  tags: Array<TagModel>;
  projects: Array<ProjectModel>;

  constructor(rawData: any = {}) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;

    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    }else{
      this.image = undefined
    }
    
    this.tags = [];

    if (rawData.tags) {
      rawData.tags.forEach((tag: TagModel) => {
        this.tags.push(new TagModel(tag));
      });
    }

    if (rawData.projects) {
      this.projects = rawData.projects;
    }else{
      this.projects = [];
    }
  }
}
