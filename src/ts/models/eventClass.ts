import ProjentModel from "@/ts/models/projentClass"

export default class Event extends ProjentModel {

  path: String;

  constructor(rawData: any = {}) {
    super(rawData);

    this.path = '/event/'+this.id

  }

}
