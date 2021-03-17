import TagModel from "@/ts/models/tagClass";

export default class TaggableModel {

  tags: Array<TagModel>;

  constructor(rawData: any = {}) {

    this.tags = [];

    if (rawData.tags) {
      rawData.tags.forEach((tag: TagModel) => {
        this.tags.push(new TagModel(tag));
      });
    }
    
    this.tags = this.tags.sort((a:any, b:any) => a.order - b.order)
  }

}