const people = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];


let hash = {};

for(let val of people){
    let key = val.age;

    if(!hash[key]){
        hash[key] = []
    }
    hash[key].push(val)
}

console.log(hash);
