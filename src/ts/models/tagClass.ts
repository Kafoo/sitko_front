export default class TagModel {
  id: number;
  title: string;

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.title = rawData.title;
  }
}
