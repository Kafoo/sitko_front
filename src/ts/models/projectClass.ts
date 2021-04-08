import ProjentModel from "@/ts/models/projentClass";
import CaldateModel from "@/ts/models/caldateClass";

export default class Project extends ProjentModel {
  essence: string;
  path: string;
  current: boolean;

  constructor(rawData: any = {}) {
    super(rawData);

    this.essence = "project";

    this.path = "/project/" + this.id;

    this.current = false;

    this.caldates.forEach((caldate: CaldateModel) => {
      if (!caldate.isPast) {
        this.current = true;
      }
    });
  }
}
