
// // const {adding} = require('./calculate/sum');

// // const {multiply} = require('./calculate/multiply')

// const {adding,multiply}= require('./calculate');

// const data = require('./data.json');

// console.log(data);


// var a = 10;

// var b = 5;

// console.log(adding(a,b));
// console.log(multiply(a,b));

// console.log(a+1);

// console.log(globalThis)

// function variables(){
//     var ab = 100;
// }

// console.log(ab);


const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const products = [{
    id: 1,
    product: "iphone"
}, {
    id: 2,
    product: "waterbottle"
}, {
    id: 3,
    product: "monitor"
}]

app.get('/fetchProduct',async(req,res)=>{
    try {
        const response = await fetch("https://dummyjson.com/products");

        if(!response.ok){
            throw new Error(`errrrrr${response.status}`)
        }
        const result = await response.json();
        return res.status(200).json(result.products)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});

app.get('/products/:id',(req,res)=>{
    try {
        const response = products.find((p)=>p.id === parseInt(req.params.id));
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});

app.post('/products',(req,res)=>{
    try {
        const data = req.body;
        console.log(data)
        products.push(data);
        res.status(201).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});

app.put('/updateProduct/:id',(req,res)=>{
    try {
         const product = products.find((p)=>p.id === parseInt(req.params.id))
         const {name} = req.body;
         product.product = name;
         res.status(201).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});

app.delete('/deleteProduct/:id',(req,res)=>{
    try {
        const product = products.findIndex((p)=> p.id === parseInt(req.params.id));
        products.splice(product,1)
        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.post('/verify', async (req, res) => {
    try {

        // Target dev instance API (example)
        const targetUrl = 'https://dev.chainsys.com/appbuilder/status';

        // Forward the request body to the dev instance
        const response = await axios.get(targetUrl);

        // Send back the response from the dev instance to the original client
        res.status(response.status).json(response.data);

    } catch (error) {
        console.error('Error calling dev instance:', error.message);
        res.status(400).send("status error");
    }
});


app.post("/portationpipeline",async (req,res)=>{
    
})
app.listen(3000, () => {
    console.log('Server running on port 3000');
});






const PORT = 5000;
app.listen(5000,()=>{
    console.log("Server listening on port", PORT);
})