export default class TagsCategoryModel {
  id?: number;
  name: string;
  icon: string;

  constructor(rawData: any = {}) {
    this.id = rawData.id;
    if (rawData.translated_name) {
      this.name = rawData.translated_name;
    }else{
      this.name = rawData.name;
    }
    this.icon = rawData.icon;
  }
}
