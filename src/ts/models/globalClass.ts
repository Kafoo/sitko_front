import moment from "moment";

export default class globalModel {
  updated_at?: string;
  created_at?: string;
  can: Object;

  constructor(rawData: any = {}) {
    this.can = rawData.can;
    
    if (rawData.updated_at) {
      this.updated_at = moment(rawData.updated_at).utc().format()
    }

    if (rawData.created_at) {
      this.created_at = moment(rawData.created_at).utc().format()
    }
  }
}
