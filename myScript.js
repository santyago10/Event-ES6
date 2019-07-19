class Event{
    constructor(name,date,timeBeg,timeEnd){
        this.name=name;
        this.date=date;
        this.timeBeg=timeBeg;
        this.timeEnd=timeEnd;
    }
}
var events=[];
let eventForm=document.forms["eventForm"];
let nameInput=eventForm.elements["name"];
let dateInput=eventForm.elements["date"];
let beginInput=eventForm.elements["beginning"];
let endInput=eventForm.elements["ending"];


let eventsBlock=document.getElementById("events");
let refresh=document.getElementById("refresh");
let count=0;

//Выводим таблицу на страницу
display=()=>{
   
    for(var i=count;i<events.length;i++)
    {
        eventsBlock.innerHTML=eventsBlock.innerHTML+`<tr><td>${events[i].name}</td><td>${events[i].date}</td>
        <td>${events[i].timeBeg}</td><td>${events[i].timeEnd}</td><td><button id="remove">Удалить</button></td></tr>`;
        count++;
        
    }
    

}

    $('#events').on('click', '#remove', function(e){
        $(this).closest('tr').remove();
     });

     


let button=document.getElementById("send");

//Добавляем элемент в таблицу
addEvent=(nameVal,dateVal,beginVal,endVal)=>{
    
    nameVal=nameInput.value;
    dateVal=dateInput.value;
    beginVal=beginInput.value;
    endVal=endInput.value;
   

    if(events.length==0){
       event1=new Event(nameVal,dateVal,beginVal,endVal);
       events.push(event1);
       eventForm.reset();
    } 
    else
    {
    for(var i=0;i<events.length;i++)
    {
        if(dateVal!==events[i].date)
        {
            event1=new Event(nameVal,dateVal,beginVal,endVal);
            events.push(event1);
            eventForm.reset();  
            break;
        }
        else
        {
            alert("Эта дата занята, выберите другую");
            break;
        }
   }
}
}


