function halvsies(arr) {
  let result = [];
  let middle = Math.ceil(arr.length / 2);
  result.push(arr.slice(0, middle), arr.slice(middle));

  return console.log(result);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]