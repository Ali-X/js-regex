"use strict";

console.log(findTime(prompt('Enter date:', 'Завтрак в 19:00')));

function findTime(str) {
  let regex = new RegExp("\\b(0\\d|1\\d|2[0-3]):(0\\d|[1-5]\\d)\\b");
  let time = str.match(regex);

  if (time) {
    return time[0];
  }

  return 'No correct time in string'
}