export default class ImageModel {
  full: String;
  medium: String;
  low_medium: String;
  thumb: String;
  public_id?: String;

  constructor(data: any) {

    if (data) {
      this.full = data.full;
      this.medium = data.medium;
      this.low_medium = data.low_medium;
      this.thumb = data.thumb;
      this.public_id = data.public_id;
    }else{
      this.full = "https://res.cloudinary.com/dyigive9u/image/upload/v1606566148/ojty0jq09f6z8ttshbrx.jpg";
      this.medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1606566148/ojty0jq09f6z8ttshbrx.jpg";
      this.low_medium = "https://res.cloudinary.com/dyigive9u/image/upload/t_low_medium/v1606566148/ojty0jq09f6z8ttshbrx.jpg";
      this.thumb = "https://res.cloudinary.com/dyigive9u/image/upload/t_thumb/v1606566148/ojty0jq09f6z8ttshbrx.jpg";
      this.public_id = undefined;
    }

  }
}
