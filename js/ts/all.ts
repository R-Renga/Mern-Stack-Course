let message: string = "helloworld";
console.log(message);

let ages : number = 45;
console.log(ages);

let active : boolean = true;
console.log(active);


//npm i --save --dev typescript


//Arrays
let numbers : number[] = [5,2,8,4,6];
let values : string[] = ["raja","chennai","engineer"];
let mixed : (string | number)[] = ["45","raja"]

//tuples
let list : [string,number] = ["raja",45];


//enum - to store the static values ,used to hanle http status code

enum StatusCode {
    success = 200,
    error = 500,
    notFound = 404
}

let code : StatusCode = StatusCode.success;

//any  - avoid when possible
let mess : any = 10;
mess = "raja";
mess = true;

//unknown - safer than any - need to check the datatype before using
let unk : unknown = 90;

if(typeof unk === "string"){
    unk.slice();
}

//void - function that dont return 
function subscribe (message:string):void {
console.log("messages");
}

function abc(a:number,b:number):number{
    return a+b;
}

//default

function xyz(a:number = 78):number{
    return a
}


//object
interface User {
    readonly username:string, // readonly
    firstname:string,
    age?:number // optional
    getDiscount(percent:number):number;
}

let user : User = {
    username:"raja",
    firstname : "renga",
    age:98,
    getDiscount(percent:number):number{
        return percent
    }
}

type Profile = {
    name:string,
    age:number
}

const profile : Profile = {
    name:"raja",
    age:45
}

//diff between type and interface
 
//interfaces can be extended and type aliases not
//interfaces declared multiple times and will merge

interface Animal {
    names : string,
}

interface Dog extends Animal {
    breed : string
}

let dog : Dog = {
    names: "puppy",
    breed : "golden"
}


interface Sports {
    names : string
}

interface Sports {
    tools : string
}

let games : Sports = {
    names :"cricket",
    tools : "football"
}

//type aliases for union and intersection

//intersection

interface Color {
    name:string
}

interface sketch {
    sketchname : string
}

type colorful = Color & sketch;

const result : colorful = {
    name : "blue",
    sketchname : "red"
}

//union

type Admin = {
    role: "admin";
    permissions: string[];
  };
  
  type Userss = {
    role: "user";
    email: string;
  };
  
  type Account = Admin | Userss;

  //type asserstions

  let dat :  number =  (unk as string).length;

  //type gaurds

  function process(message : string | number){
    if(typeof message === "string"){
        console.log(message.length);
        
    }else{
        console.log(message.toString());
        
    }
  }


  //generics - Generics allow you to write reusable and flexible code that works with different data types — while keeping type safety.

  function identity<T>(value:T):T{
    return value
  }

  const output1 = identity<string>("raja")


  function identities<T>(data:T):T{
    return data
  }

  const output2 = identities<string>("rajaa")

  output2.toLowerCase();
  //output2.toFixed() - error


  //partial

  type PartialTodo = Partial<Color>;

  let updatedate : PartialTodo = {
    //all will be optional
  }

  //requrired
  //readonly
  //omit - specific field
  //pick - specific field