let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
                     arr.forEach(elem => {
                       elem.split('').forEach(letter => {
                         if ('aeiou'.includes(letter)) {
                           console.log(letter);
                         }
                       });
                     })
});