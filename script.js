// height control
const maxScrollHeight = 500; 
  
function preventScroll() {
  if (window.pageYOffset > maxScrollHeight) {
    window.scrollTo(0, maxScrollHeight);
  }
}

window.addEventListener('scroll', preventScroll);

// digital
const months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
const days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];

function updateClock() {
  var currentTime = new Date();
  var futureTime = new Date(currentTime.getTime() + 20000);
  var microTime = new Date(currentTime.getTime() + (1 * 60 * 1000) + (15 * 1000));
  var futureTime2 = new Date(currentTime.getTime() + (60 * 1000)); 
  var futureTime3 = new Date(currentTime.getTime() + (120 * 1000));
  var futureTime4 = new Date(currentTime.getTime() + (3 * 60 * 1000) + (22 * 1000)); 
  var futureTime5 = new Date(currentTime.getTime() + (44 * 1000)); 

  var currentDate = currentTime.getDate();
  var currentMonth = currentTime.getMonth();
  var currentDay = currentTime.getDay();
  var currentHour = currentTime.getHours();
  if (currentHour > 12) {
    currentHour = currentHour - 12;
  }
  var currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  var currentSeconds = currentTime.getSeconds();
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  var futureHour = futureTime.getHours();
  if (futureHour > 12) {
    futureHour = futureHour - 12;
  }
  var futureMinutes = futureTime.getMinutes();
  var futureSeconds = futureTime.getSeconds();

  var microHour = microTime.getHours();
  if (microHour > 12) {
    microHour = microHour - 12;
  }
  var microMinutes = microTime.getMinutes();
  var microSeconds = microTime.getSeconds();

  var futureHour2 = futureTime2.getHours();
  if (futureHour2 > 12) {
    futureHour2 = futureHour2 - 12;
  }
  var futureMinutes2 = futureTime2.getMinutes();
  var futureSeconds2 = futureTime2.getSeconds();

  var futureHour3 = futureTime3.getHours();
  if (futureHour3 > 12) {
    futureHour3 = futureHour3 - 12;
  }
  var futureMinutes3 = futureTime3.getMinutes();
  var futureSeconds3 = futureTime3.getSeconds();

  var futureHour4 = futureTime4.getHours();
  if (futureHour4 > 12) {
    futureHour4 = futureHour4 - 12;
  }
  var futureMinutes4 = futureTime4.getMinutes();
  var futureSeconds4 = futureTime4.getSeconds();
  
  var futureHour5 = futureTime5.getHours();
  if (futureHour5 > 12) {
    futureHour5 = futureHour5 - 12;
  }
  var futureMinutes5 = futureTime5.getMinutes();
  var futureSeconds5 = futureTime5.getSeconds();


  $(".day").html(days[currentDay]);
  $(".month").html(months[currentMonth]);
  $(".date").html(currentDate);
  $(".hour").html(currentHour);
  $('.minutes').html(currentMinutes);
  $('.seconds').html(currentSeconds);
  $('.future-hour').html(futureHour);
  $('.future-minutes').html(futureMinutes < 10 ? "0" + futureMinutes : futureMinutes);
  $('.future-seconds').html(futureSeconds < 10 ? "0" + futureSeconds : futureSeconds);
  $('.micro-hour').html(microHour);
  $('.micro-minutes').html(microMinutes < 10 ? "0" + microMinutes : microMinutes);

  var formattedMicroSeconds = microSeconds < 10 ? "0" + microSeconds : microSeconds;
  $('.micro-seconds').html(formattedMicroSeconds);

  $('.future-hour2').html(futureHour2);
  $('.future-minutes2').html(futureMinutes2 < 10 ? "0" + futureMinutes2 : futureMinutes2);
  $('.future-seconds2').html(futureSeconds2 < 10 ? "0" + futureSeconds2 : futureSeconds2);
  $('.future-hour3').html(futureHour3);
  $('.future-minutes3').html(futureMinutes3 < 10 ? "0" + futureMinutes3 : futureMinutes3);
  $('.future-seconds3').html(futureSeconds3 < 10 ? "0" + futureSeconds3 : futureSeconds3);
  $('.future-hour4').html(futureHour4);
  $('.future-minutes4').html(futureMinutes4 < 10 ? "0" + futureMinutes4 : futureMinutes4);
  $('.future-seconds4').html(futureSeconds4 < 10 ? "0" + futureSeconds4 : futureSeconds4);
  $('.future-hour5').html(futureHour5);
  $('.future-minutes5').html(futureMinutes5 < 10 ? "0" + futureMinutes5 : futureMinutes5);
  $('.future-seconds5').html(futureSeconds5 < 10 ? "0" + futureSeconds5 : futureSeconds5);
}

updateClock();
setInterval(updateClock, 1000);

// analog delays
var lastUpdateTime = Date.now();
var microSeconds = 0;
var futureSeconds2 = 0;
var futureSeconds3 = 0;
var futureSeconds4 = 0;
var futureSeconds5 = 0; 

setInterval(function() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - lastUpdateTime;
  
  // microSeconds
  var secondsPassed = Math.floor(elapsedTime / 2150);
  microSeconds = (microSeconds + secondsPassed) % 60;
  
  // futureSeconds2
  var secondsPassed2 = Math.floor(elapsedTime / 2300);
  futureSeconds2 = (futureSeconds2 + secondsPassed2) % 60;

  // futureSeconds3
  var secondsPassed3 = Math.floor(elapsedTime / 120000);
  futureSeconds3 = (futureSeconds3 + secondsPassed3) % 60;

  // futureSeconds4
  var secondsPassed4 = Math.floor(elapsedTime / (3 * 60 * 1000 + 22 * 1000));
  futureSeconds4 = (futureSeconds4 + secondsPassed4) % 60;

  // futureSeconds5
  var secondsPassed5 = Math.floor(elapsedTime / 44000); 
  futureSeconds5 = (futureSeconds5 + secondsPassed5) % 60;
  
  var formattedMicroSeconds = microSeconds < 10 ? "0" + microSeconds : microSeconds;
  var formattedFutureSeconds2 = futureSeconds2 < 10 ? "0" + futureSeconds2 : futureSeconds2;
  var formattedFutureSeconds3 = futureSeconds3 < 10 ? "0" + futureSeconds3 : futureSeconds3;
  var formattedFutureSeconds4 = futureSeconds4 < 10 ? "0" + futureSeconds4 : futureSeconds4;
  var formattedFutureSeconds5 = futureSeconds5 < 10 ? "0" + futureSeconds5 : futureSeconds5;
  
  $('.micro-seconds').html(formattedMicroSeconds);
  $('.future-seconds2').html(formattedFutureSeconds2);
  $('.future-seconds3').html(formattedFutureSeconds3);
  $('.future-seconds4').html(formattedFutureSeconds4);
  $('.future-seconds5').html(formattedFutureSeconds5); 
  
  lastUpdateTime = currentTime - (elapsedTime % 2150);
}, 2150);

// toggle
var texts = document.getElementsByClassName('toggleText');
for (var i = 0; i < texts.length; i++) {
  texts[i].style.opacity = '0';
}

document.getElementById('toggleButton').addEventListener('click', function() {
  var texts = document.getElementsByClassName('toggleText');
  for (var i = 0; i < texts.length; i++) {
    var text = texts[i];
    if (text.style.opacity === '1' || text.style.opacity === '') { 
      text.style.opacity = '0';
    } else {
      text.style.opacity = '1';
    }
  }
});

// appearing clocks
document.addEventListener("DOMContentLoaded", function(event) { 
  setTimeout(function() {
    var clock1 = document.querySelector('.clock-1');
    clock1.style.opacity = '1'; 
  }, 1000); 
  setTimeout(function() {
    var clock2 = document.querySelector('.clock-2');
    clock2.style.opacity = '1';
  }, 1200)
  setTimeout(function() {
    var clock3 = document.querySelector('.clock-3');
    clock3.style.opacity = '1';
  }, 1400)
  setTimeout(function() {
    var clock4 = document.querySelector('.clock-4');
    clock4.style.opacity = '1';
  }, 1600)
  setTimeout(function() {
    var clock5 = document.querySelector('.clock-5');
    clock5.style.opacity = '1';
  }, 1800)
  setTimeout(function() {
    var clock6 = document.querySelector('.clock-6');
    clock6.style.opacity = '1';
  }, 2200)
  setTimeout(function() {
    var clock7 = document.querySelector('.clock-7');
    clock7.style.opacity = '1';
  }, 2000)
  setTimeout(function() {
    var clock8 = document.querySelector('.clock-8');
    clock8.style.opacity = '1';
  }, 2400)
  setTimeout(function() {
    var clock9 = document.querySelector('.clock-9');
    clock9.style.opacity = '1';
  }, 2600)
  setTimeout(function() {
    var clock10 = document.querySelector('.clock-10');
    clock10.style.opacity = '1';
  }, 2800)
  setTimeout(function() {
    var clock11 = document.querySelector('.clock-11');
    clock11.style.opacity = '1';
  }, 3000)
  setTimeout(function() {
    var clock12 = document.querySelector('.clock-12');
    clock12.style.opacity = '1';
  }, 3200)
});

// analog
const secondHand1 = document.querySelector('.second-1');
const secondHand2 = document.querySelector('.second-2');
const secondHand3 = document.querySelector('.second-3');
const secondHand4 = document.querySelector('.second-4');
const secondHand5 = document.querySelector('.second-5');
const secondHand6 = document.querySelector('.second-6');
const secondHand7 = document.querySelector('.second-7');
const secondHand8 = document.querySelector('.second-8');
const secondHand9 = document.querySelector('.second-9');
const secondHand10 = document.querySelector('.second-10');
const secondHand11 = document.querySelector('.second-11');
const secondHand12 = document.querySelector('.second-12');
const minsHand1 = document.querySelector('.min-1');
const minsHand2 = document.querySelector('.min-2');
const minsHand3 = document.querySelector('.min-3');
const minsHand4 = document.querySelector('.min-4');
const minsHand5 = document.querySelector('.min-5');
const minsHand6 = document.querySelector('.min-6');
const minsHand7 = document.querySelector('.min-7');
const minsHand8 = document.querySelector('.min-8');
const minsHand9 = document.querySelector('.min-9');
const minsHand10 = document.querySelector('.min-10');
const minsHand11 = document.querySelector('.min-11');
const minsHand12 = document.querySelector('.min-12');
const hourHand1 = document.querySelector('.hour-1');
const hourHand2 = document.querySelector('.hour-2');
const hourHand3 = document.querySelector('.hour-3');
const hourHand4 = document.querySelector('.hour-4');
const hourHand5 = document.querySelector('.hour-5');
const hourHand6 = document.querySelector('.hour-6');
const hourHand7 = document.querySelector('.hour-7');
const hourHand8 = document.querySelector('.hour-8');
const hourHand9 = document.querySelector('.hour-9');
const hourHand10 = document.querySelector('.hour-10');
const hourHand11 = document.querySelector('.hour-11');
const hourHand12 = document.querySelector('.hour-12');

function setDate() {
const now = new Date();

// clock-1
// real
  const seconds1 = now.getSeconds();
  const secondsDegrees1 = ((seconds1 / 60) * 360) + 90;
  secondHand1.style.transition = seconds1 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand1.style.transform = `rotate(${secondsDegrees1}deg)`;

  const mins1 = now.getMinutes();
  const minsDegrees1 = ((mins1 / 60) * 360) + ((seconds1 / 60) * 6) + 90;
  minsHand1.style.transition = mins1 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand1.style.transform = `rotate(${minsDegrees1}deg)`;

  const hour1 = now.getHours();
  const hourDegrees1 = ((hour1 / 12) * 360) + ((mins1 / 60) * 30) + 90;
  hourHand1.style.transition = hour1 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand1.style.transform = `rotate(${hourDegrees1}deg)`;

  // clock-2
  // +20 seconds 
  now.setSeconds(now.getSeconds() + 20);
  const seconds2 = now.getSeconds();
  const secondsDegrees2 = ((seconds2 / 60) * 360) + 90;
  secondHand2.style.transition = seconds2 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand2.style.transform = `rotate(${secondsDegrees2}deg)`;

  const mins2 = now.getMinutes();
  const minsDegrees2 = ((mins2 / 60) * 360) + ((seconds2 / 60) * 6) + 90;
  minsHand2.style.transition = mins2 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand2.style.transform = `rotate(${minsDegrees2}deg)`;

  const hour2 = now.getHours();
  const hourDegrees2 = ((hour2 / 12) * 360) + ((mins2 / 60) * 30) + 90;
  hourHand2.style.transition = hour2 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand2.style.transform = `rotate(${hourDegrees2}deg)`;

// clock-3
// +1 minute & 15 sec / +delay
setTimeout(() => {
  now.setSeconds(now.getSeconds() + 15);
  const seconds3 = now.getSeconds();
  const secondsDegrees3 = ((seconds3 / 60) * 360) + 90;
  secondHand3.style.transition = seconds3 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand3.style.transform = `rotate(${secondsDegrees3}deg)`;

  const mins3 = now.getMinutes();
  const minsDegrees3 = ((mins3 / 60) * 360) + ((seconds3 / 60) * 6) + 90;
  minsHand3.style.transition = mins3 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand3.style.transform = `rotate(${minsDegrees3}deg)`;

  const hour3 = now.getHours();
  const hourDegrees3 = ((hour3 / 12) * 360) + ((mins3 / 60) * 30) + 90;
  hourHand3.style.transition = hour3 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand3.style.transform = `rotate(${hourDegrees3}deg)`;
}, 150);

// clock-4
// +1 minute / +delay
setTimeout(() => {
  now.setSeconds(now.getSeconds());
  const seconds4 = now.getSeconds();
  const secondsDegrees4 = ((seconds4 / 60) * 360) + 90;
  secondHand4.style.transition = seconds4 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand4.style.transform = `rotate(${secondsDegrees4}deg)`;

  now.setMinutes(now.getMinutes() + 1);
  const mins4 = now.getMinutes();
  const minsDegrees4 = ((mins4 / 60) * 360) + ((seconds4 / 60) * 6) + 90;
  minsHand4.style.transition = mins4 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand4.style.transform = `rotate(${minsDegrees4}deg)`;

  const hour4 = now.getHours();
  const hourDegrees4 = ((hour4 / 12) * 360) + ((mins4 / 60) * 30) + 90;
  hourHand4.style.transition = hour4 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand4.style.transform = `rotate(${hourDegrees4}deg)`;
}, 300);

// clock-5
// +2 minute / +delay
setTimeout(() => {
  now.setSeconds(now.getSeconds());
  const seconds5 = now.getSeconds();
  const secondsDegrees5 = ((seconds5 / 60) * 360) + 90;
  secondHand5.style.transition = seconds5 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand5.style.transform = `rotate(${secondsDegrees5}deg)`;

  now.setMinutes(now.getMinutes() + 1);
  const mins5 = now.getMinutes();
  const minsDegrees5 = ((mins5 / 60) * 360) + ((seconds5 / 60) * 6) + 90;
  minsHand5.style.transition = mins5 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand5.style.transform = `rotate(${minsDegrees5}deg)`;

  const hour5 = now.getHours();
  const hourDegrees5 = ((hour5 / 12) * 360) + ((mins5 / 60) * 30) + 90;
  hourHand5.style.transition = hour5 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand5.style.transform = `rotate(${hourDegrees5}deg)`;
}, 400);

// clock-6
// 32 second delay
setTimeout(() => {
now.setSeconds(now.getSeconds() + 32);
const seconds6 = now.getSeconds();
const secondsDegrees6 = ((seconds6 / 60) * 360) + 90;
secondHand6.style.transition = seconds6 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
secondHand6.style.transform = `rotate(${secondsDegrees6}deg)`;

const mins6 = now.getMinutes();
const minsDegrees6 = ((mins2 / 60) * 360) + ((seconds6 / 60) * 6) + 90;
minsHand6.style.transition = mins6 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
minsHand6.style.transform = `rotate(${minsDegrees6}deg)`;

const hour6 = now.getHours();
const hourDegrees6 = ((hour6 / 12) * 360) + ((mins6 / 60) * 30) + 90;
hourHand6.style.transition = hour6 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
hourHand6.style.transform = `rotate(${hourDegrees6}deg)`;
}, 50);

// clock-7
// real
const seconds7 = now.getSeconds();
const secondsDegrees7 = ((seconds7 / 60) * 360) + 90;
secondHand7.style.transition = seconds7 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
secondHand7.style.transform = `rotate(${secondsDegrees7}deg)`;

const mins7 = now.getMinutes();
const minsDegrees7 = ((mins7 / 60) * 360) + ((seconds7 / 60) * 6) + 90;
minsHand7.style.transition = mins7 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
minsHand7.style.transform = `rotate(${minsDegrees7}deg)`;

const hour7 = now.getHours();
const hourDegrees7 = ((hour7 / 12) * 360) + ((mins7 / 60) * 30) + 90;
hourHand7.style.transition = hour7 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
hourHand7.style.transform = `rotate(${hourDegrees7}deg)`;

// clock-9
// + 1 min / + delay
setTimeout(() => {
  now.setSeconds(now.getSeconds());
  const seconds9 = now.getSeconds();
  const secondsDegrees9 = ((seconds9 / 60) * 360) + 90;
  secondHand9.style.transition = seconds9 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand9.style.transform = `rotate(${secondsDegrees9}deg)`;

  now.setMinutes(now.getMinutes() + 1);
  const mins9 = now.getMinutes();
  const minsDegrees9 = ((mins9 / 60) * 360) + ((seconds9 / 60) * 6) + 90;
  minsHand9.style.transition = mins9 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand9.style.transform = `rotate(${minsDegrees9}deg)`;

  const hour9 = now.getHours();
  const hourDegrees9 = ((hour9 / 12) * 360) + ((mins9 / 60) * 30) + 90;
  hourHand9.style.transition = hour9 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand9.style.transform = `rotate(${hourDegrees9}deg)`;
}, 600);

// clock-10
// +44 seconds + delay
setTimeout(() => {
now.setSeconds(now.getSeconds() + 44);
const seconds10 = now.getSeconds();
const secondsDegrees10 = ((seconds10 / 60) * 360) + 90;
secondHand10.style.transition = seconds10 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
secondHand10.style.transform = `rotate(${secondsDegrees10}deg)`;

const mins10 = now.getMinutes();
const minsDegrees10 = ((mins10 / 60) * 360) + ((seconds10 / 60) * 6) + 90;
minsHand10.style.transition = mins10 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
minsHand10.style.transform = `rotate(${minsDegrees10}deg)`;

const hour10 = now.getHours();
const hourDegrees10 = ((hour10 / 12) * 360) + ((mins10 / 60) * 30) + 90;
hourHand10.style.transition = hour10 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
hourHand10.style.transform = `rotate(${hourDegrees10}deg)`;
}, 150);

// clock-11
// +3 mins +22 sec + delay
setTimeout(() => {
  now.setSeconds(now.getSeconds() + 22);
  const seconds11 = now.getSeconds();
  const secondsDegrees11 = ((seconds11 / 60) * 360) + 90;
  secondHand11.style.transition = seconds11 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand11.style.transform = `rotate(${secondsDegrees11}deg)`;
  
  const mins11 = (now.getMinutes() + 3);
  const minsDegrees11 = ((mins11 / 60) * 360) + ((seconds11 / 60) * 6) + 90;
  minsHand11.style.transition = mins11 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  minsHand11.style.transform = `rotate(${minsDegrees11}deg)`;
  
  const hour11 = now.getHours();
  const hourDegrees11 = ((hour11 / 12) * 360) + ((mins11 / 60) * 30) + 90;
  hourHand11.style.transition = hour11 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand11.style.transform = `rotate(${hourDegrees11}deg)`;
  }, 500);


// clock-12
// +20 seconds
now.setSeconds(now.getSeconds() + 20);
const seconds12 = now.getSeconds();
const secondsDegrees12 = ((seconds12 / 60) * 360) + 90;
secondHand12.style.transition = seconds12 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
secondHand12.style.transform = `rotate(${secondsDegrees12}deg)`;

const mins12 = now.getMinutes();
const minsDegrees12 = ((mins12 / 60) * 360) + ((seconds12 / 60) * 6) + 90;
minsHand12.style.transition = mins12 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
minsHand12.style.transform = `rotate(${minsDegrees12}deg)`;

const hour12 = now.getHours();
const hourDegrees12 = ((hour12 / 12) * 360) + ((mins12 / 60) * 30) + 90;
hourHand12.style.transition = hour12 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
hourHand12.style.transform = `rotate(${hourDegrees12}deg)`;

}
setInterval(setDate, 1000);
setDate();



// clock-8
// 3:56 pause
const now = new Date();

now.setHours(12);
now.setMinutes(56);
now.setSeconds(23);

now.setSeconds(now.getSeconds() );
const seconds8 = now.getSeconds();
const secondsDegrees8 = ((seconds8 / 60) * 360) + 90;
secondHand8.style.transition = seconds8 === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
secondHand8.style.transform = `rotate(${secondsDegrees8}deg)`;

const mins8 = now.getMinutes();
const minsDegrees8 = ((mins8 / 60) * 360) + ((seconds8 / 60) * 6) + 90;
minsHand8.style.transition = 'none';
minsHand8.style.transform = `rotate(${minsDegrees8}deg)`;

const hour8 = now.getHours();
const hourDegrees8 = ((hour8 / 12) * 360) + ((mins8 / 60) * 30) + 90;
hourHand8.style.transition === 0 ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
hourHand8.style.transform = `rotate(${hourDegrees8}deg)`;