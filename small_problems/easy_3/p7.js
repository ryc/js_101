function twice(number) {
  let numString = String(number);
  let strHalf = (numString.length / 2);
  // if (numString.length % 2 !== 0) return (2 * number);
  
  if (numString.slice(0, strHalf) === numString.slice(strHalf)) {
    return number;
  } else {
    return 2 * number;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676