const days=document.querySelector("#days");       //calling from tags and store in Const variable 
const hours=document.querySelector("#hours");     //calling from tags and store in Const variable
const minutes=document.querySelector("#minutes"); //calling from tags and store in Const variable
const seconds=document.querySelector("#seconds"); //calling from tags and store in Const variable


function UpdateTime(){ //function  
const currentYear = new Date().getFullYear();                   //The variable currentYear stores inside Current Date with year
const newYear =new Date(`January 1 ${currentYear+1} 00:00:00`); //when insert or other variable use the ` this symbol 


const currentDate = new Date();                  //Current Date stored in variable
   
const diff = newYear - currentDate;              //Subract CurrentDate From newYear It will gives the remaining time for Newyear and it stored in variable 

 //java Script Shows the time in millliSeconds so Divides below. 
const d = Math.floor(diff/1000/60/60/24);        //divides from before values it give "Days"
const h = Math.floor((diff/1000/60/60)%24);      //modules 24 from before values it give "Hours"
const m = Math.floor((diff/1000/60)%60);         //modules 60 from before values it give "Minutes"
const s = Math.floor((diff/1000)%60);            //modules 60 from before values it give "Seconds"

days.innerHTML=d<10?"0"+d:d;                     //give Condition to html tags it add 0 in front of timer untill reached num 10
hours.innerHTML=h<10?"0"+h:h;                    //                                 " "
minutes.innerHTML=m<10?"0"+m:m;                  //                                 " "
seconds.innerHTML=s<10?"0"+s:s;                  //                                 " "
}

setInterval(UpdateTime,1000);                    //Calls the Function in SetInterval(It will refresh the page in 1000ms(1s) the timer Goes with flow)




/*
1000 ms = 1s
60s = 1min
60min = 1h
24h = 1 day */