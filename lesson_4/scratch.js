function sumOfSums(arr) {
  return arr.reduce((acc, _, idx) => {
    return acc + arr.slice(0, idx + 1).reduce((acc, cur) => acc + cur, 0);
  }, 0);
}