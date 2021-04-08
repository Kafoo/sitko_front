import ProjentModel from "@/ts/models/projentClass";
import CaldateModel from "@/ts/models/caldateClass";

export default class Event extends ProjentModel {
  path: string;
  essence: string;
  current: boolean;

  constructor(rawData: any = {}) {
    super(rawData);

    this.essence = "event";

    this.path = "/event/" + this.id;

    this.current = false;

    this.caldates.forEach((caldate: CaldateModel) => {
      if (!caldate.isPast) {
        this.current = true;
      }
    });
  }
}
