import Project from '@/models/projectClass'


export default class Event {
  constructor (rawData = {}) {
    this.timed = rawData.timed
    this.id = rawData.id
    this.rawStart = this.timeFormat(rawData.start)
    this.rawEnd = this.timeFormat(rawData.end)
    this.start = this.timeFormat(rawData.start, false)
    this.end = this.timeFormat(rawData.end, false)
    this.type = rawData.type

    if (rawData.child) {

      var childFactory = {
          "Project": Project  
      }

      var childClassName = this.type.charAt(0).toUpperCase() + this.type.slice(1)
      this.child = new childFactory[childClassName](rawData.child);
	    this.name = rawData.child.title
	    this.description = rawData.child.description
      this.color = this.child.color
    }else{
    	this.name = "Evénement sans child"
    	this.description = "Une description d'événement lambda"
      this.color = 'blue'
    }

    this.chip = this.chipFormat()

  }

  timeFormat(dateTime, sec = true){

    var date = dateTime.split(' ')[0]

    if (!this.timed) {
      return date
    }

    var time = dateTime.split(' ')[1]
    var timeParts = time.split(':')
    let newTime = '' 

    timeParts.forEach(function(part, i){
      if (part.length < 2) {

        part = '0'+part
      }
      if ( i === part.length && !sec ) {
        //nothing for seconds
      }
      else if (i === 0) {
        newTime += part
      }else{
        newTime += ':'+part        
      }
    })

    return date+' '+newTime

  }

  chipFormat(){
    let chip = ''
    if (this.start === this.end) {
      this.singleDate = true
      chip = 'le '+this.start.split(' ')[0]
      if (this.timed == true) {
        chip += ' à '+this.start.split(' ')[1]
      }
    }else{
      this.singleDate = false
      chip = 'du '+this.start.split(' ')[0]
      if (this.timed == true) {
        chip += ' à '+this.start.split(' ')[1]
      }
      chip += ' au '+this.end.split(' ')[0]
      if (this.timed == true) {
        chip += ' à '+this.end.split(' ')[1]
      }
    }

    return chip
  }

}