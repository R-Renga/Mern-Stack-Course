const obj2 = {
    nam:"prba",
    age:78,
    profile:{
        usernam:"renga",
        city:{
            country:"india"
        }
    }
}

let obj1  = {...obj2}

obj1.profile.usernam = "raja"

console.log(obj1);
console.log(obj2);

//deep

const obj3 = {
    nam:"prba",
    age:78,
    profile:{
        usernam:"renga",
        city:{
            country:"india"
        }
    }
}

let obj4 = JSON.parse(JSON.stringify(obj3));

obj4.profile.usernam = "raja"

console.log(obj4);
console.log(obj3);
