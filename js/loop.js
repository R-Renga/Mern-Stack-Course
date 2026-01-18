let arr = [7,3,4,5]

for(let val of arr){
    console.log(val);
}

let obj = {
    name:"raja",
    age:18
}

for(let key in  obj){
    console.log(obj[key]);
}

//while loop

const data = [3,6,8,9,3]

let i = 0;

while (i < data.length){
    if(data[i] === 9){
        console.log("success");
        break;
    }
    i++
}

//do while

// do{

// }while(condition)

let num = 5;

do {
    console.log(num);
    num--
}while(n > 0);