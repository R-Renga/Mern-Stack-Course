let day = 2;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid days");
}

let score = 27;
let grade;

switch(true){
    case score >= 89: 
    grade = "A"
    break;
    case score >= 20 : 
    grade = "d"
    break;
    default :
    grade = "f"
}

console.log(grade);

let age = 20;

let message = age > 18 ? "i am adult" : "not adult"