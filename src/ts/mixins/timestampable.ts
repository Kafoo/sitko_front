import moment from "moment";


export default function(superclass: any) {
  return class extends superclass {
    created_at: string;

    constructor(rawData: any = {}) {
      super(rawData);
      this.created_at = moment.utc(rawData.created_at).local().format("YYYY-MM-DD HH:mm:ss.SSSS");
    }
  };
}
