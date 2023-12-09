let hr = document.getElementById("hour");
let mint = document.getElementById("min");
let sec = document.getElementById("sec");

displayTime = ()=>{
let date = new Date();

// getting hours, minutes and seconds
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

let hRotation = 30*hh + mm/2; // 12 hour  = 360deg than 1 hour = 360/12 deg = 30deg therfore h hour = 30h and 60mints = 30deg therfore 1mint = 30/60deg = 1/2 deg that is why m mints = 1/2 m deg 
let mRotation = 6*mm;// 60 mintues = 360 deg than 1 mint = 360/60 deg = 6 deg therefore m mints = 6m
let sRotation = 6*ss // 60 seconds = 360 deg than 1 sec = 360/60 deg = 6 deg therefore sec mints = 6sec

hr.style.transform = `rotate(${hRotation}deg)`;
mint.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;
}


setInterval(displayTime, 1000)