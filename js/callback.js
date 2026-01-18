function greet(name,callback){
    console.log(name);
    callback()
}

function sayhello(){
    console.log("byee");
}

greet("raja",sayhello)

setTimeout(()=>{
    console.log("raja");
},1000)


//callback hell

const cart = ["shoes","pants","kurta"];

api.createOrder(cart,function(){
    api.payment(function(){
        api.orderSummary(function(){
        })
    })
})