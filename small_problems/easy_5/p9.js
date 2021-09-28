function countOccurrences(arr) {
  let counts = {};

  arr.forEach(el => {
    el = el.toLowerCase(); // for further exploration part
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });

  for (key in counts) {
    console.log(`${key} => ${counts[key]}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

/* rodes

After looking at the solution, I swiped its idea of breaking out the log functionality into a separate function. It does a better job of following the principle of "functions should do one thing" than having everything in one function does.


function countOccurrences(vehicles) {
  let vehicleCount = vehicles.reduce((list, unit) => {
    unit = unit.toLowerCase();
    list[unit] = (list[unit] || 0) + 1;
    return list;
  }, {});

  logResult(vehicleCount)
}

function logResult(list) {
  let listMap = new Map(Object.entries(list));

  listMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
  });
}

I've been using reduce to do things like this for practice, and I've gotten to like it. But the for loop is simpler and probably performs faster.

I did some experimenting with listing out the objects. I tried setting up a Map object and running Map.prototype.forEach on it. Map has a rich set of methods to manipulate its key/value pairs, sort of like Dictionary objects in some other languages. But if you already have an object in place, then plugging it into a Map object just to do a forEach on it is probably overkill. Still, it works fine.

Map.prototype.forEach's callback procedure takes the value for the first argument and the key for the second, which is the opposite of practically every method in every language I know of that works with key/value pairs. So that's an idiosyncrasy to look out for.

After tinkering a while, I realized that I was plugging Object.entries(list) into the Map object for no good reason, since I could just use it directly in a call to Array.prototype.forEach. So, I refactored to this:


function logResult(list) {
  Object.entries(list).forEach( ([key, value]) => {
    console.log(`${key} => ${value}`);
  });
}
One discovery here for me was the cosmetic improvement of using array destructuring in the callback function. Without it, the function looked like this:


function logResult(list) {
  Object.entries(list).forEach( (arr) => {
    console.log(`${arr[0]} => ${arr[1]}`);
  });
}
I think the destructuring looks nicer and is easier to read.

*/