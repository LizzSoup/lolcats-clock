//Variables Here
// ===============
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeBtn = document.getElementById("partyTimeButton");
var isPartyTime = false;
var setWakeUpTime = document.getElementById("wakeUpTimeSelector");
var setLunchTime = document.getElementById("lunchTimeSelector");
var setNapTime = document.getElementById("napTimeSelector");


//Function to change picture and message
var updateClock = function() {
     var lolcat = document.getElementById('lolcat');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 
     if (time == partyTime){
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "IZ PARTEE TIME!!";
     } else if (time == napTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
          messageText = "IZ NAP TIME...";
     } else if (time == lunchTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
          messageText = "IZ NOM NOM NOM TIME!!";
     } else if (time == wakeupTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
          messageText = "IZ TIME TO GETTUP.";
     } else if (time < noon) {
          messageText = "Good morning!";
     } else if (time > evening) {
          messageText = "Good Evening!";
     }else {
          messageText = "Good afternoon!";
     }
 
     lolcat.src = image;
     message.innerText = messageText;

//Call the function to display clock
     showCurrentTime();

};

//Function to display current time 
var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');
     
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";
 
     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }
 
     if (hours > noon){
          hours = hours - 12;
     }
 
     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }
 
     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }
 
     // put together the string that displays the time
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
     clock.innerText = clockTime;
};

//Update the time each second
var oneSecond = 1000;
 setInterval( updateClock, oneSecond);


 //Call the function to change message and photos 
updateClock();


//Event functions
//===============
//Party button event 
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
	partyTimeBtn.innerHTML = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
	partyTimeBtn.style.background = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
	partyTimeBtn.innerHTML = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
	partyTimeBtn.style.background = "#222";
   }
};

//Wake up selector event
var wakeUpEvent = function() {
    wakeupTime = setWakeUpTime.value;
};


//Lunch Time selector event
var lunchEvent = function() {
    lunchTime = setLunchTime.value;
};


// Nap selector event 
var napEvent = function() {
    napTime = setNapTime.value;
};



// Event listeners
// ===============

partyTimeBtn.addEventListener("click", partyEvent);
setWakeUpTime.addEventListener('change', wakeUpEvent);
setLunchTime.addEventListener('change', lunchEvent);
setNapTime.addEventListener('change', napEvent);