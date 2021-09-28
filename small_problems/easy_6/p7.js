function swapName(str) {
  let nameArray = str.split(' ');
  let length = nameArray.length;
  return `${nameArray[0]}, ${nameArray[length - 1]} ${nameArray.slice(1, -1).join(' ')}`;
}

console.log(swapName('Joe Roberts Kumar Reddy'));    // "Roberts, Joe"