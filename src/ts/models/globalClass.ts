export default class globalModel {
  
  updated_at?: string;
  can: Object;

  constructor(rawData: any = {}) {

    this.can = rawData.can;

    if (rawData.updated_at) {      
      if (rawData.updated_at.indexOf('T') > 0) {
        var parts = rawData.updated_at.split('T')
        this.updated_at = parts[0]+" "+parts[1].split('Z')[0]
      }else{
        this.updated_at = rawData.updated_at;
      }
    }

  }
}
