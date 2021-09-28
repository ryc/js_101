function union(arr1, arr2) {
  let result = [];
  arr1.concat(arr2).forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });

  return console.log(result);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]