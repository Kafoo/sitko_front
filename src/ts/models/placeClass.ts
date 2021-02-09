import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";
import ProjectModel from "@/ts/models/projectClass";
import UserModel from "@/ts/models/userClass"

export default class PlaceModel {
  id?: number;
  name: string;
  description: string;
  image?: ImageModel | String;
  tags: Array<TagModel>;
  projects_count: number;
  author: UserModel;

  constructor(rawData: any = {}) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;
    this.author = rawData.author;

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

    this.projects_count = rawData.projects_count;
  }
}
