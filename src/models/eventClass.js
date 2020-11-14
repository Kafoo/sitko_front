export default class Event {
  constructor (rawData = {}) {
    this.id = rawData.id
    this.rawStart = this.timeFormat(rawData.start)
    this.rawEnd = this.timeFormat(rawData.end)
    this.start = this.timeFormat(rawData.start, false)
    this.end = this.timeFormat(rawData.end, false)
    this.color = "blue"
    this.timed = rawData.timed

    if (rawData.child) {
    	this.child = rawData.child
	    this.name = rawData.child.title
	    this.description = rawData.child.description
    }else{
    	this.name = "Evénement"
    	this.description = "Une description d'événement lambda"
    }

    if (this.start === this.end) {
      this.singleDate = true
      this.chip = 'le '+this.start.split(' ')[0]
      if (this.timed == true) {
        this.chip += ' à '+this.start.split(' ')[1]
      }
    }else{
      this.singleDate = false
      this.chip = 'du '+this.start.split(' ')[0]
      if (this.timed == true) {
        this.chip += ' à '+this.start.split(' ')[1]
      }
      this.chip += ' au '+this.end.split(' ')[0]
      if (this.timed == true) {
        this.chip += ' à '+this.end.split(' ')[1]
      }
    }

  }

  timeFormat(dateTime, sec = true){

    var date = dateTime.split(' ')[0]
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

}