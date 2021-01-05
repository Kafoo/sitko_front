export default class TagModel {
  id?: number;
  title: string;
  custom: boolean;

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.title = rawData.title;
    this.custom = rawData.custom
  }
}
