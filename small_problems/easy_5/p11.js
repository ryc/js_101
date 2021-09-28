const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return `${padNumber(hours)}:${padNumber(minutes)}`;
}

function padNumber(num) {
  return (String(num).length < 2) ? '0' + num : num;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

/* rodes
function timeOfDay(minuteOffset) {
  const DAY_MINS = 1440;
  const HOUR_MINS = 60;
  const DAY_HOURS = 24;
  const WEEK_DAYS = 7;
  const DOW = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday','Friday','Saturday'
  ];

  let day = Math.floor(minuteOffset / DAY_MINS) % WEEK_DAYS;
  let hours = Math.floor(minuteOffset % DAY_MINS / HOUR_MINS);
  let minutes = minuteOffset % HOUR_MINS;

  if (Math.sign(minuteOffset) === -1) {
    [day, hours, minutes] = [
      day + WEEK_DAYS, 
      hours + DAY_HOURS, 
      minutes + HOUR_MINS
    ];
  }

  let formatNum = (num) => String(num).padStart(2, '0');
  [hours, minutes] = [hours, minutes].map(formatNum);

  return `${DOW[day]} ${hours}:${minutes}`;
}

It's possible to get rid of the special handling of negative numbers on line 15, by complicating the assignment of the day, hours and minutes variables on lines 11 through 13:

  let day = (Math.floor(minuteOffset / DAY_MINS) % WEEK_DAYS + WEEK_DAYS) % WEEK_DAYS;
  let hours = (Math.floor(minuteOffset % DAY_MINS / HOUR_MINS) + DAY_HOURS) % DAY_HOURS;
  let minutes = (minuteOffset % HOUR_MINS + HOUR_MINS) % HOUR_MINS;

  // if (Math.sign(minuteOffset) === -1) {
  //   [day, hours, minutes] = [
  //     day + WEEK_DAYS, 
  //     hours + DAY_HOURS, 
  //     minutes + HOUR_MINS
  //   ];
  // }

Basically, if the input is negative, the division calculation results in a negative number, so it's necessary to add an extra seven days, 24 hours or 60 minutes to the day, hours or minutes variables, respectively. For example, calculating the day variable from -4231: Math.floor(-4231 / 1440) % 7 is -3 (the % 7 is necessary if the input number is more minutes than are in a week, or 10080). We have to add 7 to that to get 4, which is the right day.

But what if we add 7 to a positive input, say 3000? In this case, Math.floor(3000 / 1440) % 7 is 2, the number we want. If we add 7 to it as well, we get 9. So, the last % WEEK_DAYS sets the result back to 2.

We have an analogous situation on the hours and minutes calculations, so we have to apply an appropriate % calculation to these as well.

All that, then, makes it unnecessary to check for negative numbers, but it's pretty dense and hard to read. So I decided to go with the simpler version of lines 11 through 13 and leave in the negative number check on line 15.

Lines 23 and 24 are an egregious violation of the KISS principle. They could be rewritten thus:

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');

But that's no fun at all.

/* Further Exploration - rodes
function timeOfDay(minuteOffset) {
  const DOW = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday','Friday','Saturday'
  ];
  let day = new Date('2/14/21 00:00');
  day.setMinutes(minuteOffset);

  const dayName = DOW[day.getDay()];
  const hours = String(day.getHours()).padStart(2, '0');
  const minutes = String(day.getMinutes()).padStart(2, '0');

  return `${dayName} ${hours}:${minutes}`;
}
The Date object does a lot of the work for us, so the code is simpler. Specifically, once you apply the input offset using setMinutes, then getDay, getHours and getMinutes calculate the day, hours and minutes for you. No arithmetic, no special handling of negative numbers.

*/

