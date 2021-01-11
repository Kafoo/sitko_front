export default class TagsCategoryModel {
  id?: number;
  name: string;
  icon: boolean;

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.icon = rawData.icon
  }
}
