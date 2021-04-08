import ImageModel from "@/ts/models/imageClass";

export default function(superclass: any) {
  return class extends superclass {
    image: ImageModel | string | null;

    constructor(rawData: any = {}) {
      super(rawData);

      if (rawData.image) {
        this.image = new ImageModel(rawData.image);
      } else {
        this.image = null;
      }
    }
  };
}
