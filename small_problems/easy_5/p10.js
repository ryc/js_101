function average(arr) {
  let sum = arr.reduce(((sum, cv) => sum + cv), 0);
  return Math.trunc(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40