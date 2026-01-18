const arr1 = [4,5,8,3];
const arr2 = [9,4,2,7];

const arr  = [...arr1,...arr2];

const obj1 = { name: "raja" };
const obj2 = { age: 38 };

const merged = { ...obj1, ...obj2 };

const data = Math.max(...arr1);

function abc(name, age) {
    console.log(name, age);
  }
  
  const values = ["raja", 38];
  
  abc(...values);


  const obj = { name: "raja" };

const updated = {
  ...obj,
  city: "Madurai"
};


console.log(updated);

function updateAge(user) {
    return {
      ...user,
      age: user.age + 1
    };
  }
  
  const updateds = updateAge({ name: "Raja", age: 38 });




//rest

function xyz(a,b,...rest){
console.log(rest);
}

xyz(1,2,3,4,5)