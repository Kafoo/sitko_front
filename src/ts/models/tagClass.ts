import TagsCategoryModel from "@/ts/models/tagsCategoryClass";

export default class TagModel {
  id?: number;
  title: string;
  custom: boolean;
  category?: TagsCategoryModel
  color?: string

  constructor(rawData:any = {}) {
    this.id = rawData.id;
    this.title = rawData.title;
    this.custom = rawData.custom
    this.category = rawData.category

    if (this.category) {
      switch (this.category.id) {
        case 1 :
          this.color = 'grey darken-3'
          break;
        case 11 :
          this.color = 'orange darken-3'
          break;
        case 21 :
          this.color = 'blue darken-3'
          break;
        case 31 :
          this.color = 'purple darken-3'
          break;
        case 41 :
          this.color = 'red darken-3'
          break;
        case 51 :
          this.color = 'brown'
          break;
        case 61 :
          this.color = 'green darken-3'
          break;
        case 71 :
          this.color = 'yellow darken-3'
          break;
      
        default:
          this.color = 'grey darken-1'
          break;
      }
    }else{
      this.color = 'grey darken-1'
    }

  }
}
