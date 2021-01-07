import ImageModel from "@/ts/models/imageClass";
import TagModel from "@/ts/models/tagClass";

export default class UserModel {
  id: number;
  name: string;
  last_name?: string;
  email: string;
  email_verified_at?: string;
  image: ImageModel | String;

  constructor(rawData: any) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.last_name = rawData.last_name;
    this.email = rawData.email;
    this.email_verified_at = rawData.email_verified_at;
    if (rawData.image) {
      this.image = new ImageModel(rawData.image);
    } else {
      this.image = new ImageModel('default_avatar')
    }
  }
}
