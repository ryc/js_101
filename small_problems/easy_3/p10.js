function century(year) {
  if (year <= 100) return '1st';

  let number = Math.floor(year / 100);
  number = (year % 10 === 0) ? number : number + 1;

  let lastDigit = number % 10;
  let lastTwoDigits = number % 100;
  let suffix;

  if ([11, 12, 13].includes(lastTwoDigits)) {
    suffix = 'th';
  } else {
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
        break;
    }
  }

  return String(number) + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"