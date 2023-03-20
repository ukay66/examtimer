
let time=0;
var new_delta=0;
let reset =false;
let start=false;
let duration=0;
let start_clock=0;


function setDuration()
{
  duration=document.getElementById("duration").value ;
  if(duration>300) 
  {duration=300;
  document.getElementById("duration").value=duration;}
  //duration in seconds
  duration=Math.round(duration*60);
  if(duration<0) {duration=0; return;}
  new_delta = duration;
  display();
  start=false;
  
}

function setStop()
{
  reset=true;
  start=false;
  new_delta = 0;
  display();
}
function setStart()
{
   if(!start)
  {
    start_clock = Date.now();
    start = true;
    reset =false;
  }

}


function upDateCounter()
{
if (duration<=0 || duration=='')
  {
    new_delta=0;
    display();
    return; 
  }

 if(!start)
  return;

if(start)
{
delta = Date.now() - start_clock;
new_delta = duration -delta/1000;
if(new_delta<0) return;
display();
}
if (reset)
{
  new_delta = 0;
  display();
}

}

function display()
{
  
  let hrs = Math.floor(new_delta/(3600));
  let mins =Math.floor((new_delta % 3600)/60);
  let secs=Math.floor((new_delta % 3600)%60);
  secs=secs<10? "0"+secs : secs;
  mins=mins<10? "0"+mins:mins;
  let countdown = hrs + "h" +"     " + mins + "m"+"      "+ secs+"s";
  const counterEl = document.getElementById("counter");
  counterEl.innerHTML=countdown;

}
setInterval(upDateCounter,1000);

function showTime()
{
let date=new Date();
let h= date.getHours();
let m= date.getMinutes();
let s=date.getSeconds();
let date1=date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${date1}-${month}-${year}`;
let day=date.getDay();
day===0? day="Sunday":day===1? day="Monday":day===2? day="Tuesday":day===3? day="Wednesday":
day===4? day="Thursday":day===5? day="Friday":day===6? day="Saturday":day="Sunday";
document.getElementById("day").innerHTML=day;
document.getElementById("current-date").innerHTML=currentDate;

let ampm ="am";
ampm=(h>=12)? "pm":"am";
if(h==0)
{
  h=12;
}

h=(h>12)? h=h-12:h;
h=(h<10)? "0"+h:h;
m=(m<10)? "0"+m:m;
s=(s<10)? "0"+s:s;

let t = h + ":" + m + " "+ ampm;
document.getElementById("digiclock").innerText=t;
document.getElementById("digiclock").innerContent=t;
}

showTime();
setInterval(showTime,1000);

