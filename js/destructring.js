const colors = ["green","blue","red"];

const [first,third] = colors


const [a,b,c="default"] = colors;

const [x,...rest] = colors


//object

let obj = {
    "name":"raja",
    "age":25
}

const {name,age} = obj;

const {name:username,age:dob} = obj

const {name:firstname,dobs="78"} = obj

console.log(firstname,dobs);

const {namee,...resti} = obj

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


const {nam,profile:{usernam,city:{country}}} = obj2

console.log(nam,usernam,country);



function abc(obj){
    const {nam,age} = obj
    return
}

abc(obj2)


function abc({name,age}){
    console.log(name,age);
 }
 
 let obj3 = {
     name:"raja",
     age:38
 }
 
 abc(obj3)