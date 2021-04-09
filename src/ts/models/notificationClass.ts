import i18n from "../plugins/i18n";
import ImageModel from "./imageClass";
import PlaceModel from "./placeClass";
import UserModel from "./userClass";
import GlobalModel from "./globalClass";
import { capitalize } from "@/ts/functions/vueFilters";

export default class NotificationModel extends GlobalModel {
  id: number;
  message: string;
  link: string;
  type: string;
  requesting_type: string;
  requested_type: string;
  image: ImageModel;
  requesting: UserModel | PlaceModel;
  requested: UserModel | PlaceModel;
  requested_at: string;
  state: string;
  read: boolean;

  constructor(rawData: any = {}) {
    super(rawData)
    this.id = rawData.id;
    this.type = rawData.type;
    this.requesting_type = rawData.requesting_type;
    this.requested_type = rawData.requested_type;
    this.requested_at = this.getTime(rawData.requested_at);
    this.requesting = this.getRequesting(rawData.requesting)!;
    this.requested = this.getRequested(rawData.requested)!;
    this.message = this.getMessage() as string;
    this.image = this.getImage();
    this.link = this.requesting.path;
    this.state = rawData.state;

    if (rawData.read_at) {
      this.read = true;
    } else {
      this.read = false;
    }
  }

  getTime(rawTime: string) {
    var date = new Date(rawTime);

    var timeParts = rawTime.split(" ")[1].split(":");
    var time = timeParts[0] + ":" + timeParts[1];

    return (
      this.day(date.getDay()) +
      " " +
      date.getDate() +
      " " +
      this.month(date.getMonth()) +
      " à " +
      time
    );
  }

  getRequesting(requesting: object) {
    if (this.type == "link_request") {
      if (this.requesting_type == "user") {
        return new UserModel(requesting);
      } else if (this.requesting_type == "place") {
        return new PlaceModel(requesting);
      }
    }
  }

  getRequested(requested: object) {
    if (this.type == "link_request") {
      if (this.requested_type == "user") {
        return new UserModel(requested);
      } else if (this.requested_type == "place") {
        return new PlaceModel(requested);
      }
    }
  }

  getMessage() {
    if (this.type == "link_request") {
      const requesting = "<b>" + this.requesting.name + "</b>";
      const requested = "<b>" + this.requested.name + "</b>";
      const translation_path =
        "notification.link." +
        this.requesting_type +
        ".to" +
        capitalize(this.requested_type);

      return i18n.t(translation_path, { requesting, requested });
    }
  }

  getImage() {
    var image;

    if (this.type == "link_request") {
      image = new ImageModel(this.requesting.image);
    }

    if (!image) {
      image = new ImageModel();
    }

    return image;
  }

  day(d: number) {
    switch (d) {
      case 1:
        return "lundi";
      case 2:
        return "mardi";
      case 3:
        return "mercredi";
      case 4:
        return "jeudi";
      case 5:
        return "vendredi";
      case 6:
        return "samedi";
      case 0:
        return "dimanche";
    }
  }

  month(m: number) {
    switch (m) {
      case 0:
        return "jan.";
      case 1:
        return "fév.";
      case 2:
        return "mars";
      case 3:
        return "avr.";
      case 4:
        return "mai";
      case 5:
        return "juin";
      case 6:
        return "juill.";
      case 7:
        return "août";
      case 8:
        return "sept.";
      case 9:
        return "oct.";
      case 10:
        return "nov.";
      case 11:
        return "déc.";
    }
  }
}
