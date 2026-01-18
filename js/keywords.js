{
    var a = 100;
    let b = 50;
    const c = 25;
}
console.log(a);
// console.log(b); // reference error
// console.log(c); // reference error - cannot access before




let b = 50;
{
  console.log(b) // works because of closure
}


var ab = 100;
// let ab = 90; // ab already declared syntax error

var data = 87;
{
    {
        var data = 74;
    } 
}

console.log(data);


var data = 87;
{
    
    let data = 74;// allowed
    
}






function abc(){
    var a = 20;
}

abc();

console.log(a); // error


//function scope - global scope - blockscope
// {} → ignored by var

// function() → respected by var

// let / const → always respect {}




