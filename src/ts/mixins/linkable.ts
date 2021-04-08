export default function(superclass: any) {
  return class extends superclass {
    link?: string;

    constructor(rawData: any = {}) {
      super(rawData);

      this.link = rawData.link;
    }
  };
}
