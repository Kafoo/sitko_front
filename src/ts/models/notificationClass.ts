import timestampable from "../mixins/timestampable";
import mix from "../mixins/_mix";
import GlobalModel from "./globalClass";
import ImageModel from "./imageClass";

export default class NotificationModel extends mix(GlobalModel).with(
  timestampable
) {
  id: number;
  essence: string;
  message: string;
  link: string;
  type: string;
  image: ImageModel;
  read: boolean;
  closable: boolean;
  time: string;

  constructor(rawData: any = {}) {
    super(rawData);
    this.id = rawData.id;
    this.essence = "notification";
    this.type = rawData.type;
    this.time = this.getTime(this.created_at);
    this.message = rawData.message;


    this.image = new ImageModel(rawData.image);

    this.link = rawData.link || "/notifications";
    this.read = !!rawData.read_at;
    this.closable = true;
  }

  getTime(rawTime: string) {
    var date = new Date(rawTime);

    var timeParts = rawTime.split(" ")[1].split(":");
    var time = timeParts[0] + ":" + timeParts[1];

    var response =
      this.day(date.getDay()) +
      " " +
      date.getDate() +
      " " +
      this.month(date.getMonth()) +
      " à " +
      time;

    return response;
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
