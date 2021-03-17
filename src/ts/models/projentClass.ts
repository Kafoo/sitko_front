import ImageModel from "@/ts/models/imageClass";
import CaldateModel from "@/ts/models/caldateClass";
import PlaceModel from "@/ts/models/placeClass";
import UserModel from "@/ts/models/userClass";
import TaggableModel from "@/ts/models/taggableClass";

export default class ProjentModel extends TaggableModel {

  id: number;
  place_id: number;
  title: string;
  description: string;
  image?: ImageModel;
  place?: PlaceModel;
  caldates: Array<CaldateModel>;
  inc_caldates: Array<CaldateModel>;
  author: UserModel;

  constructor(rawData: any = {}) {

    super(rawData)

    this.id = rawData.id;
    this.place_id = rawData.place_id;

    if (rawData.author) {
      this.author = rawData.author;
    } else {
      this.author = new UserModel();
    }

    this.title = rawData.title;
    this.description = rawData.description;

    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    } else {
      this.image = undefined;
    }

    this.place = rawData.place;

    this.caldates = [];
    this.inc_caldates = [];

    if (rawData.caldates) {
      rawData.caldates.forEach((caldate: CaldateModel) => {
        caldate = new CaldateModel(caldate)
        this.caldates.push(caldate);
        if (!caldate.isPast) {
          this.inc_caldates.push(caldate)
        }
      });
    }


  }

  get bigtitle(): string {
    return this.title.toUpperCase();
  }

}