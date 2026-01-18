const bull = require("bull")

async function hello(){
    return "hi hello"
}

hello().then((data)=>console.log(data));


console.log("start");
async function timer(){
    try {
        let data = "hi i am javascript"
        console.log("hiii");
        return data
    } catch (error) {
        throw error
    }
}

async function testing(){
    try {
        const data = await timer()
        console.log(data);
        console.log("hello");
    } catch (error) {
        throw error
    }
}
testing();
console.log("raja");



async function placeOrder(cart) {
    try {
        try {
            orderId = await createOrder(cart);
          } catch (err) {
            console.log("Create order failed:", err);
          }
  
      const paymentResult = await proceedtopayment(orderId);
  
      const summary = await ordersummarys(paymentResult);
  
      const walletResult = await updatewallet(summary);
  
      console.log(walletResult);
    } catch (err) {
      console.log(err);
    }
  }

  placeOrder()

  
  async function placeOrder(cart) {
    let orderId;
  
    try {
      orderId = await createOrder(cart);
    } catch (err) {
      console.log("Create order failed:", err);
    }
  
    // This WILL run even if createOrder fails
    console.log("Next line printed");
  
    if (!orderId) return; // optional safety
  
    const paymentResult = await proceedtopayment(orderId);
    const summary = await ordersummarys(paymentResult);
    const walletResult = await updatewallet(summary);
  
    console.log(walletResult);
  }
  