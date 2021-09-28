function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

function power(num, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return num;

  return multiply(num, power(num, exp - 1));
}

// function power(num, exp) {
//   let result = multiply(num, num);
  
//   if (exp === 0) return 1;
//   if (exp === 1) return num;
//   if (exp === 2) return result;

//   while (exp > 2) {
//     result *= num;
//     exp -= 1;
//   }

//   return result;
// }

console.log(power(-2, 5) === -32);
console.log(power(2, 10) === 1024);
