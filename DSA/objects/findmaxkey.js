const obj = { a: 10, b: 30, c: 20 };

let maxKey = null;
let maxValue = -Infinity;

for (let key in obj) {
  if (obj[key] > maxValue) {
    maxValue = obj[key];
    maxKey = key;
  }
}