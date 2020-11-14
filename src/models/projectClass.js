import Event from '@/models/eventClass'

export default class Project {
  constructor (rawData = {}) {
    this.id = rawData.id
    this.title = rawData.title
    this.type = rawData.type
    this.description = rawData.description

    this.events = []

    if (rawData.events) {
		    rawData.events.forEach((event)=>{
		    	this.events.push(new Event(event))
		    })
    }


  }

  get bigtitle () {
    return this.title.toUpperCase()
  }
}