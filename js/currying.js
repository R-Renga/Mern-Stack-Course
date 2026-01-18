function abc(a,b,c){
    return a + b + c
};


abc(1,2,3);


function z(a){
    return function (b){
     return function (c){
        return a+b+c
     }
    }
}

const final = z(2)(3)(8)
console.log(final)

const a = z(2);
const b = a(3)
const result = b(7)
console.log(result);


function binding(a,b,c){
    console.log(a+b+c);
}


const results = binding.bind(null,10,20);
results(90)





