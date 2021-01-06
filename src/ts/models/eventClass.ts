import ImageModel from "@/ts/models/imageClass";
import CaldateModel from "@/ts/models/caldateClass";

export default class Event {

  id:number
  place_id:number
  title:string
  type:string
  description:string
  image?:ImageModel
  expanded:boolean
  caldates:Array<CaldateModel>

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.place_id = rawData.place_id;
    this.title = rawData.title;
    this.type = rawData.type;
    this.description = rawData.description;

    if (rawData.image) {
      this.image = new ImageModel(rawData.image)
    }

    this.expanded = false;

    this.caldates = [];

    if (rawData.caldates) {
      rawData.caldates.forEach((caldate:any) => {
        this.caldates.push(new CaldateModel(caldate));
      });
    }
  }

  get bigtitle():string {
    return this.title.toUpperCase();
  }

  get color():string {
    if (this.type === "autre") {
      return "red darken-3";
    } else if (this.type === "public") {
      return "yellow darken-3";
    } else if (this.type === "privé") {
      return "blue darken-3";
    } else {
      return "green darken-3";
    }
  }
}
