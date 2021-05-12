import ProjentModel from "@/ts/models/projentClass";

export default class Project extends ProjentModel {
  essence: string;
  path: string;
  current: boolean;

  constructor(rawData: any = {}) {
    super(rawData);

    this.essence = "project";

    this.path = "/project/" + this.id;

    this.is_done = rawData.is_done || false;

    this.current = !this.is_done;
  }
}
