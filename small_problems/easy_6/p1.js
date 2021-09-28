function repeater(str) {
  return console.log(str.split('').map(char => char + char).join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""