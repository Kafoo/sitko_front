export default class ImageModel {
  full: String;
  medium: String;
  low_medium: String;
  thumb: String;
  public_id: String;

  constructor(data: any) {
    this.full = data.full;
    this.medium = data.medium;
    this.low_medium = data.low_medium;
    this.thumb = data.thumb;
    this.public_id = data.public_id;
  }
}
