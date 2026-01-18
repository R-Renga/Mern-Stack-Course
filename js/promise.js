const user = fetch(api);

user.then((data) => {
  console.log(data);
});

const promise = createOrder(cart);

promise.then((order) => {
  proceedtopayment(order);
});

//promise chaining

createOrder(cart)
  .then((orderId) => {
    return proceedtopayment(orderId);
  })
  .then((showordersummary) => {
    return ordersummarys(showordersummary);
  })
  .then((wallent) => {
    return updatewallet(wallent);
  });

//promise creation

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!Validate(cart)) {
      const err = new Error("cart is invalid");
      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      resolve("success");
    }
  });
}

createOrder(cart)
  .then((orderId) => {
    return proceedtopayment(orderId);
  })
  .then((showordersummary) => {
    return ordersummarys(showordersummary);
  })
  .then((wallent) => {
    return updatewallet(wallent);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((orderId) => {
    console.log(orderId);
  });



//promise all

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 success")
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 success")
    },3000)
})

Promise.all([p1,p2])
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})