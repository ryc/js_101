// q1
let numbers = [1, 2, 3];
numbers[6] = 5; // no, this will not throw an error. it will assign element at index 6 to the number 5

numbers[4]; // this will return undefined

// q2
let str1 = "Come over here!";
let str2 = "What's up, Doc?";

console.log(str1[str1.length - 1] === '!');
