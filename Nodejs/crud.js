const express = require('express');


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
        const { targetUrl, ...restParams } = req.body; // Extract target URL from body

        if (!targetUrl) {
            return res.status(400).json({ message: "targetUrl is required" });
        }

        // Make request to target URL
        const response = await fetch(targetUrl, {
            method: "POST", // assuming we need POST
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restParams)
        });

        const data = await response.json();

        res.status(200).json({
            message: "success",
            data
        });

    } catch (error) {
        console.error(error);
        res.status(400).send("status error");
    }
});






const PORT = 5000;
app.listen(5000,()=>{
    console.log("Server listening on port", PORT);
})