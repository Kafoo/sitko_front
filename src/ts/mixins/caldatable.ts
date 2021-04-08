import CaldateModel from "@/ts/models/caldateClass";

export default function(superclass: any) {
  return class extends superclass {
    caldates: Array<CaldateModel>;
    inc_caldates: Array<CaldateModel>;

    constructor(rawData: any = {}) {
      super(rawData);

      this.caldates = [];
      this.inc_caldates = [];

      if (rawData.caldates) {
        rawData.caldates.forEach((caldate: CaldateModel) => {
          caldate = new CaldateModel(caldate);
          this.caldates.push(caldate);
          if (!caldate.isPast) {
            this.inc_caldates.push(caldate);
          }
        });
      }
    }
  };
}
