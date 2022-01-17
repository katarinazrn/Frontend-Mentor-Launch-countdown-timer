let launch_date = new Date();
launch_date.setDate(launch_date.getDate() + 14);

let days;
let hours;
let minutes;
let seconds;

hours = setInterval(() => {
  let diff = Math.abs(launch_date - new Date()) / 1000;

  days = Math.floor(diff / 86400);
  diff -= days * 86400;

  hours = Math.floor(diff / 3600) % 24;
  diff -= hours * 3600;

  minutes = Math.floor(diff / 60) % 60;
  diff -= minutes * 60;

  seconds = Math.ceil(diff % 60);

  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;

  
}, 1000);
