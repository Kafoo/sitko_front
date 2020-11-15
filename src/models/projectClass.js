import Event from '@/models/eventClass'

export default class Project {
  constructor (rawData = {}) {
    this.id = rawData.id
    this.title = rawData.title
    this.type = rawData.type
    this.description = rawData.description

    this.events = []

    this.color = this.getColor()

    if (rawData.events) {
		    rawData.events.forEach((event)=>{
		    	this.events.push(new Event(event))
		    })
    }


  }

  get bigtitle () {
    return this.title.toUpperCase()
  }

  getColor(){
    if (this.type === 'commun') {
      return 'red darken-3'
    }else if(this.type === 'idée') {
      return 'yellow darken-3'
    }else if(this.type === 'perso') {
      return 'blue darken-3'
    }
  }

}