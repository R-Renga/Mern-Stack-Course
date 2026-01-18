process.on("message",(result)=>{
    let  data = result.number;
    for(let i=0;i<5;i++){
        data = data + i
    }
    process.send({data})
})