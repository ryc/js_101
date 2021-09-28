function integerToString(number) {
  const DIGITS = '0123456789';

  let result = '';

  do {
    let single = number % 10;
    number = Math.floor(number / 10);
    result = DIGITS[single] + result;
  } while (number > 0)

  return result;
}

function signedIntegerToString(number) {
  let absNum = Math.abs(number);
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(absNum)}`;
    case 1:
      return `+${integerToString(absNum)}`;
    default:
      return integerToString(absNum);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");