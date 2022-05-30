class EventItem{
    constructor(header,date,time,place,location,index) {
        this._header=header;
        this._date=date;
        this._time=time;
        this._place=place;
        this._location=location;
        this._index=index;
    }
    getHeader(){
        return this._header;
    }
    getDate(){
        return this._date;
    }
    getTime(){
        return this._time;
    }
    getPlace(){
        return this._place;
    }
    getLoaction(){
        return this._location;
    }
    getIndex(){
        return this._index;
    }
    setHeader(header){
        this._header=header;
    }
    setDate(date){
        this._date=date;
    }
    setTime(time){
        this._time=time;
    }
    setPlace(place){
        this._place=place;
    }
    setLocation(location){
        this._location=location;
    }
    setIndex(index){

    }
    createEventItem(header,date,time,place,location,index){
        let eventItem="";
        eventItem+='<!--item '+index+' start-->'
        +'<div class="event-item">'
        +'<div class="event-item-inner">'
        +'<h3>'+header+'</h3>'
        +'<span class="date">'+date+'</span>'
        +'<span class="time">'+time+'</span>'
        +'<p>{ '+place+'}</p>'
        +'<p>'+location+'</p>'
        +'<img src="img/icons/flower.svg" alt="event">'
        +'</div></div>'
        +'<!--item '+index+' end-->'
    }



}