export default class LocalizationModel {
  id: number;
  title: string;
  address: object;
  position: object;
  localityType: string;
  mapView: object;
  resultType: string;

  constructor(rawData: any = {}) {
    this.id = rawData.id
    this.title = rawData.title
    this.address = rawData.address
    this.position = rawData.position
    this.localityType = rawData.localityType
    this.mapView = rawData.mapView
    this.resultType = rawData.resultType

  }

}
