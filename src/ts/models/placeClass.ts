import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";
import ProjectModel from "@/ts/models/projectClass";

export default class PlaceModel {
  id?: number;
  name: string;
  description: string;
  image: ImageModel | String;
  tags: Array<TagModel>
  projects: Array<ProjectModel>

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;
    this.image = new ImageModel(rawData.image);
    this.tags = rawData.tags;
    this.projects = rawData.projects;
  }
}
