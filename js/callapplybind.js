let obj1 = {
    name:"raja"
}

let obj2 = {
    name:"akshay"
}

function abc(greeting){
    console.log(greeting + "" + this.name);
    return greeting + " " + this.name
}

abc.call(obj1,"hello")
abc.call(obj2,"hello")


//apply

function applies(greeting,welcome){
    console.log(greeting + welcome +  "" + this.name);
}

applies.apply(obj1,["hello","welcome"])


//bind

function binding(greeting){
    console.log(greeting + "" + this.name);
}


const result = binding.bind(obj2);
result("heeeelo")

