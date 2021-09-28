function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = getRandomInteger(20, 120);
console.log(`Teddy is ${age} years old!`)