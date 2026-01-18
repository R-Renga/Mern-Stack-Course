function recursion(num){
    if(num ==0 ) return num;
    console.log(num);
    num = num-1;
    recursion(num)
};

let a = 5;
recursion(a);

function recursion(num){
    if(num===0) return num ;
    console.log(num);
    num = num-1;
    recursion(num)
};

let b = 5;
let result = recursion(b);




const cart = ["kurta","pant","shoes"];




function createOrder(cart){
    return new Promise((resolve,reject)=>{
        let orderId = true;
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            },2000)
            
        }else{
            const err = new Error("invalid")
            reject(err)
        }
    })
}







 



let names = {
    firstName:"akshay",
    place:"thanjai",
    language:{
        en:"english",
        tam:"tamil"
    }
};

let abc = {...names};


abc.firstName = "raja";
abc.language.en = "tamil"


console.log(abc);
console.log(names);
