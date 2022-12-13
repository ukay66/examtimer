
let time=0;
let stop =false;
let start=false;
let startTime=0;

function setDuration()
{
  startTime=document.getElementById("duration").value ;
  if(startTime>300) 
  {startTime=300;
  document.getElementById("duration").value=startTime;}
  time=Math.round(startTime*60);
  if(time<0) {time=0; return;}
  display();
  start=false;
  
}

function setStop()
{
  stop=true;
  start=false;
}
function setStart()
{
  start=true;
  stop=false;
}


function upDateCounter()
{
if (startTime<=0 || startTime=='')
  {
    time=0;
    display();
    return; 
  }
  if(!start)
  return;
if(stop) return;
time--;
if(time<0) return;
display();
}

function display()
{
  let hrs = Math.floor(time/3600);
  let mins =Math.floor((time % 3600)/60);
  let secs=(time % 3600)%60;
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
//console.log(ampm);
console.log(h);
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
//let d = document.getElementById("duration");
//timeleft = d.value;
//document.getElementById("counter").innerHTML=timeleft;

}

showTime();
setInterval(showTime,1000);


