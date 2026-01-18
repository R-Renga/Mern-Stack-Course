let obj1 = {
  name: "raja",
  age: 26,
  profile: {
    country: "india",
    city: {
      place: "thanjavur",
      fathersname: "ramamoorthy",
    },
  },
};

console.log(Object.values(obj1));
console.log(Object.keys(obj1));

const obj2 = Object.keys(obj1);

for (let i = 0; i < obj2.length; i++) {
  console.log(obj1[obj2[i]]);
}

console.log(Object.entries(obj1));

const obj4 = { p: 2, s: 3 };
const obj5 = { a: 4, b: 5 };

const merge = Object.assign({}, obj4, obj5);
console.log(merge);

const obj9 = {
  greet() {
    return "hi heloo";
  },
};

const person = Object.create(obj9);

person.name = "alice";

console.log(person);
console.log(person.greet());

console.log(person.hasOwnProperty("name"))