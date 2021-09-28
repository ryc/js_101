const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(str => Number(str));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

/* rodes
const DAY_MINS = 1440;

function totalMinutes(time) {
  const HOUR_MINS = 60;
  return Number(time.slice(0, 2)) * HOUR_MINS + Number(time.slice(-2));
}

function afterMidnight(time) {
  return totalMinutes(time) % DAY_MINS;
}

function beforeMidnight(time) {
  return (DAY_MINS - totalMinutes(time)) % DAY_MINS;
}
*/