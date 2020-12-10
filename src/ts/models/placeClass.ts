import ImageModel from "@/ts/models/imageClass";

export default class PlaceModel {
  id: number;
  name: string;
  description: string;
  image: ImageModel;

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;
    this.image = rawData.image;
  }
}
