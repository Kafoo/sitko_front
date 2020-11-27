
export default class Project {

  constructor (rawData = {}) {

    this.id = rawData.id
    this.name = rawData.name
    this.description = rawData.description

  }
}