function genUUID() {
  let uuid = '';
  let parts = [8, 4, 4, 4, 12]

  parts.forEach((part, partIdx) => {
    uuid += getString(part);

    if (partIdx < parts.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

function getString(num) {
  let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  let count = 0;
  let string = ''
  while (count < num) {
    let index = Math.floor(Math.random() * chars.length);
    string += chars[index];
    count += 1;
  }

  return string;
}

console.log(genUUID());
console.log(genUUID());