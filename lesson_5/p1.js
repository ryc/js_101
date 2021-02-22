let arr = ['10', '11', '9', '7', '8'];

let sortedArr = arr.map(str => Number(str))
                   .sort((a, b) => b - a)
                   .map(num => num.toString());
// let sortedArr = numArr.sort((a, b) => b - a);

console.log(sortedArr);
console.log(arr);

// LS answer
arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);