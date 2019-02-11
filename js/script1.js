"use strict";

console.log(findTime(prompt('Enter date:', 'Завтрак в 19:00')));

function findTime(str) {
  let regex = new RegExp("\\b(\\d{1,2}):(\\d{2})\\b");
  let time = str.match(regex);

  if (time) {
    let hours = time[1];
    let minutes = time[2];

    if (hours >= 0 && hours <= 24 && minutes >= 0 && minutes < 60) {
      return time[0];
    }
  }

  return 'No correct time in string'
}