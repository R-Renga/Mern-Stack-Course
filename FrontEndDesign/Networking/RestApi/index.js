import express from 'express';
import body from 'body-parser';



const app = express();

app.use(body.json());
const port = 5111;

app.all('/',(req,res)=>{
    console.log(`request`);
    console.log(`response`);
    res.send("i am up")
});

//read

const todos = [{
name:"chennai",
ph:878
},{
name:"madurai",
ph:588
}]

app.get('/read',(req,res)=>{
    console.log("read");
res.status(200).send(todos)
})

app.post('/todos',(req,res)=>{
    console.log("post");
    const result = req.body;
    todos.push(result);
    console.log(todos);
    res.status(201).send({
        status : "success"
    })
});

app.put('/todos',(req,res)=>{
    console.log("put");
    const {name,ph} = req.body;
    const todoss = todos.find(t=>t.name === name)
    if(!todoss){
        return
    }
    todoss.ph = ph;
    console.log(todoss);
    res.send({
        status : "success"
    })
});

app.delete("/todos",(req,res)=>{
    console.log("delete");
    const {name,ph} = req.body;
    const index = todos.findIndex(t=>t.name === name)
    if(!todos) return
    todos.splice(index,2)
    res.send({
        status : "success"
    })
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});


