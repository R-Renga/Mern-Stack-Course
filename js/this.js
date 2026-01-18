const obj = {
    name: "raja",
    printname:function(){
        console.log(this.name);
        
    }
}

obj.printname()

console.log(this); 


const obj3 = {
    name: "rajass",
    printname:()=>{
        console.log(this.name);
        
    }
}

obj3.printname()




//varibale not set in global as property only varibale,need to direct access




const obj2 = {
    name:"renga",
    printnames: ()=>{ 
        const y = () =>{
            console.log(this.name);
        }
        y()
    }
}

obj2.printnames()

// printnames is an arrow function

// Arrow functions do NOT have their own this

// this is taken from the surrounding scope

// In Node.js:

// Top-level this → {} (module scope)

// In Browser:

// Top-level this → window



//function and declare outside also same behaviour

var a = 50;//- works in browser

function name(){ 
    var a = 100; // not works
    console.log(this.a) 
}



const obj33 = {
    name: "Rengaraja",
    show() {
      function inner() {
        console.log(this.name);
      }
      inner();
    }
  };
  
  //NO — just because show is inside the object, this inside inner() does NOT refer to the object.
  obj33.show(); // undefined (or window.name in browser)
  


//   abc() is called without an object

// this → undefined (in strict mode)
// or window (in non-strict mode)

// this.name → undefined




// let greet = {
//     name:"piyush",
//     firstname(){
//         console.log(this.name,"name");
        
//     }
// }

// const abc = greet.firstname
// abc()

// setTimeout(greet.firstname,100)

