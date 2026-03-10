let obj = {
    firstname : "Akshay",
    lastname:"saini",
}

let printname = function(hometown,state){
console.log(this.firstname + this.lastname + hometown + state);
};


// let printMyname = printname.bind(obj);
// printMyname("india","tamilnadu");


Function.prototype.mybind = function(...args){
    let obj = this;
    let params = args.slice(1)
    return function(...args2){
        return obj.apply(args[0],[...params,...args2])
    }
}


let printMyname2 = printname.mybind(obj);
printMyname2("india","tamilnadu");



