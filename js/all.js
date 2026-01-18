let arr = [2, 5, 6, 7];

arr.splice(2, 0, 5, 6);
console.log(arr);

arr.shift(8);

let obj1 = {
  name: "pravin",
  "name": "raja",
};

obj1.country = "india"
obj1["age1"] = "27";

console.log(obj1["name"]);

// console.log(b);
// console.log(c);

const map = new Map();

map.set(1,"raja");

const set = new Set();

set.add(4)
set.add(4)
set.add("raja")

const unique = Array.from(set)

console.log(set);
console.log(unique);

set.has("raja")
set.delete(raja)