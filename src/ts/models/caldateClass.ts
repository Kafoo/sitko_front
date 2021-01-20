export default class Caldate {

  id:number
  timed:boolean
  place_id:number 
  rawStart:string
  rawEnd:string
  start:string 
  end:string
  type:string
  child_id?:number
  name:string
  description:string
  chip:string
  singleDate:boolean
  child?:any

  constructor(rawData:any = {}) {

    this.timed = rawData.timed;
    this.id = rawData.id;
    this.place_id = rawData.place_id;
    this.rawStart = this.timeFormat(rawData.start);
    this.rawEnd = this.timeFormat(rawData.end);
    this.start = this.timeFormat(rawData.start, false);
    this.end = this.timeFormat(rawData.end, false);
    this.type = rawData.type;

    if (this.start === this.end) {
      this.singleDate = true;
    }else{
      this.singleDate = false;    
    }

    if (rawData.child) {

      this.child = rawData.child

      this.type.charAt(0).toUpperCase() + this.type.slice(1);
      this.child_id = rawData.child.id;
      this.name = rawData.child.title;
      this.description = rawData.child.description;
    } else {
      this.name = "Evénement sans child";
      this.description = "Une description d'événement lambda";
    }

    this.chip = this.chipFormat();
  }

  get color():string{

    switch (this.type) {
      case "project":
        return "yellow darken-3"
        break;
    
      default:
      return "blue darken-3"
        break;
    }

  }

  timeFormat(dateTime:string, sec = true) {
    var date = dateTime.split(" ")[0];

    if (!this.timed) {
      return date;
    }

    var time = dateTime.split(" ")[1];
    var timeParts = time.split(":");
    let newTime = "";

    timeParts.forEach(function(part, i) {
      if (part.length < 2) {
        part = "0" + part;
      }
      if (i === part.length && !sec) {
        //nothing for seconds
      } else if (i === 0) {
        newTime += part;
      } else {
        newTime += ":" + part;
      }
    });

    return date + " " + newTime;
  }

  day(d:number) {
    switch (d) {
      case 1:
        return "lundi";
      case 2:
        return "mardi";
      case 3:
        return "mercredi";
      case 4:
        return "jeudi";
      case 5:
        return "vendredi";
      case 6:
        return "samedi";
      case 0:
        return "dimanche";
    }
  }

  month(m:number) {
    switch (m) {
      case 0:
        return "jan.";
      case 1:
        return "fév.";
      case 2:
        return "mars";
      case 3:
        return "avr.";
      case 4:
        return "mai";
      case 5:
        return "juin";
      case 6:
        return "juill.";
      case 7:
        return "août";
      case 8:
        return "sept.";
      case 9:
        return "oct.";
      case 10:
        return "nov.";
      case 11:
        return "déc.";
    }
  }

  fullMonth(m:number) {
    switch (m) {
      case 0:
        return "janvier";
      case 1:
        return "février";
      case 2:
        return "mars";
      case 3:
        return "avril";
      case 4:
        return "mai";
      case 5:
        return "juin";
      case 6:
        return "juillet";
      case 7:
        return "août";
      case 8:
        return "septembre";
      case 9:
        return "octobre";
      case 10:
        return "novembre";
      case 11:
        return "décembre";
    }
  }

  chipFormat() {
    let chip = "";
    var date = new Date(this.start);
    if (this.start === this.end) {
      chip =
        this.day(date.getDay()) +
        " " +
        date.getDate() +
        " " +
        this.month(date.getMonth());
      if (this.timed == true) {
        chip += " à " + this.start.split(" ")[1];
      }
    } else {
      var start = new Date(this.start);
      var end = new Date(this.end);

      chip =
        this.day(start.getDay()) +
        " " +
        start.getDate() +
        " " +
        this.month(start.getMonth());
      if (this.timed == true) {
        chip += " (" + this.start.split(" ")[1] + ") ";
      }
      chip +=
        " - " +
        this.day(end.getDay()) +
        " " +
        end.getDate() +
        " " +
        this.month(end.getMonth());
      if (this.timed == true) {
        chip += " (" + this.end.split(" ")[1] + ") ";
      }
    }
    return chip;
  }
}
