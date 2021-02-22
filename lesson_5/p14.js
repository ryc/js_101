let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = [];

Object.values(obj).forEach(itemObj => {
  if (itemObj.type === 'fruit') {
    result.push(itemObj.colors);
  } else {
    result.push(itemObj.size);
  }
});

result = result.map(elem => {
  if (Array.isArray(elem)) {
    return elem.map(word => word[0].toUpperCase() + word.slice(1));
  } else {
    return elem.toUpperCase();
  }
});

console.log(result);