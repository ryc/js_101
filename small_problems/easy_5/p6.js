function multiplicativeAverage(arr) {
  let result = 1;

  let total = arr.reduce((product, cv) => {
    return product * cv;
  }, 1);

  result = (total / arr.length).toFixed(3);

  return console.log(result);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"