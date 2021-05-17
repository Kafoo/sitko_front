import NotificationModel from "@/ts/models/notificationClass";
import { capitalize } from "../functions/vueFilters";
import i18n from "../plugins/i18n";
import ImageModel from "./imageClass";
import PlaceModel from "./placeClass";
import UserModel from "./userClass";

export default class LinkNotificationModel extends NotificationModel {
  requesting_type: string;
  requested_type: string;
  requesting?: UserModel | PlaceModel;
  requested?: UserModel | PlaceModel;
  image: ImageModel;
  state?: string;

  constructor(rawData: any = {}) {
    super(rawData);
    this.requesting_type = rawData.specifics.requesting_type;
    this.requested_type = rawData.specifics.requested_type;
    if (rawData.specifics.requesting && rawData.specifics.requested) {
      this.requesting = this.getRequesting(rawData.specifics.requesting)!;
      this.requested = this.getRequested(rawData.specifics.requested)!;
      this.message = this.getMessage() as string;
    }
    this.image = this.getImage();
    if (rawData.specifics.state) {
      this.state = rawData.specifics.state;
      this.closable = this.state !== "pending";
    }
  }

  getRequesting(requesting: object) {
    if (this.requesting_type == "user") {
      return new UserModel(requesting);
    } else if (this.requesting_type == "place") {
      return new PlaceModel(requesting);
    }
  }

  getRequested(requested: object) {
    if (this.requested_type == "user") {
      return new UserModel(requested);
    } else if (this.requested_type == "place") {
      return new PlaceModel(requested);
    }
  }

  getMessage() {
    if (this.requesting && this.requested){
      if (this.type == "link_request") {
        const requesting = "<b>" + this.requesting.name + "</b>";
        const requested = "<b>" + this.requested.name + "</b>";
        const translation_path =
          "notification.link_request." +
          this.requesting_type +
          ".to" +
          capitalize(this.requested_type);

        return i18n.t(translation_path, { requesting, requested });
      } else if (this.type == "link_confirmation") {
        const requested = "<b>" + this.requested.name + "</b>";
        const translation_path =
          "notification.link_confirmation." +
          this.requested_type +
          ".to" +
          capitalize(this.requesting_type);

        return i18n.t(translation_path, { requested });
      }
    }
  }

  getImage() {
    if (this.requested && this.requesting) { 
      if (this.type == "link_request") {
        if (this.requesting.image) {
          return new ImageModel(this.requesting.image);
        } else {
          return new ImageModel();
        }
      }
      if (this.type == "link_confirmation") {
        if (this.requested.image) {
          return new ImageModel(this.requested.image);
        } else {
          return new ImageModel();
        }
      }
    }
  return new ImageModel();
  }
}
