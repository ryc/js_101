let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];


let arrSum = array => {
  return array.reduce((acc, num) => {
    if (num % 2 !== 0) {
      acc += num;
    }

    return acc;
  }, 0);
}

arr.sort((a, b) => {
  return arrSum(a) - 
         arrSum(b);
});

console.log(arr);