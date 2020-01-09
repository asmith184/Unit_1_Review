"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/

function showClock(){
   var thisDay = new Date("May 19, 2018 9:31:27 a.m.");
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   document.getElementById("currentTime").innerHTML = "<span>date</span><span>time</span>";
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

var j4Date = nextJuly4(thisDay);
j4Date.setHours("21:00:00");

var days = thisDay.getDate("4");
var hrs = thisDay.getHrs("0");
var mins = thisDay.getMins("0");
