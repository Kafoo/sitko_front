import ImageModel from "@/ts/models/imageClass";
import EventModel from "@/ts/models/eventClass";

export default class Project {

  id:number
  place_id:number
  title:string
  type:string
  description:string
  image?:ImageModel
  expanded:boolean
  events:Array<EventModel>

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

    this.events = [];

    if (rawData.events) {
      rawData.events.forEach((event:any) => {
        this.events.push(new EventModel(event));
      });
    }
  }

  get bigtitle():string {
    return this.title.toUpperCase();
  }

  get color():string {
    if (this.type === "autre") {
      return "red darken-3";
    } else if (this.type === "ferme") {
      return "yellow darken-3";
    } else if (this.type === "écolieu") {
      return "blue darken-3";
    } else {
      return "green darken-3";
    }
  }
}
