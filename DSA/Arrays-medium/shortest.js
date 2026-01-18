const obj = {
    name: "raja",
    printname:function(){
        console.log(this.name);
        
    }
}

obj.printname()

console.log(this);




