function abc(){
    console.log("raja");
}

abc();


const abcd = function(){
    console.log("renga");
}

abcd()

//function expression advantages : 

//--------------------------------------------------------------------------------------------//
// function test() {}
// function test() {} // overrides silently 
// Avoid accidental early execution (Hoisting control)
//Function expressions are used to avoid,duplicate, hoisting issues, enable callbacks, and modern arrow functions.
setTimeout(function () {
    console.log("Executed later");
  }, 1000);

//----------------------------------------------------------------------------------------------//


//arrow

const add = (a, b) => {
    return a + b;
  };

  const test = () => {
    console.log(arguments);
  };
  test(1, 2); // reference error

  const obj9 = {
    name: "Rengaraja",
    show() {
      function inner() {
        console.log(this.name);
      }
      inner();
    }
  };
  
  obj9.show(); // undefined (or window.name in browser)

  
  const obj = {
    name: "Rengaraja",
    show() {
      const inner = () => {
        console.log(this.name);
      };
      inner();
    }
  };
  
  obj.show(); // Rengaraja
  

//anonymous,short syntax,argument,paramter must be in control
//Where Arrow Functions are BEST used
// 1.Callbacks
// 2.Array methods

// Higher order function //

const radius = [2,3,7,4,5]

function areaofcircle(r){
    return Math.PI*r*r
}

function areaofcircumference(r){
    return 2*Math.PI*r
}

function calculate(arr,logic){
    const output = [];
    for(let i=0;i<arr.length;i++){
        output.push(logic[arr[i]])
    }
    return output
}

calculate(radius,areaofcircle)


//recursion

function recursion(num){
    if(num===0) return num

    console.log(num);
    num = num-1
    return recursion(num)
}
 const results = recursion(5)
console.log(results);