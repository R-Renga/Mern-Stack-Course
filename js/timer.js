setTimeout(() => {
    console.log("raja");
},3000);



setTimeout(() => {
    console.log("no timer");
});


setTimeout(() => {
    console.log("bracket");
},[]);

function x(){
    for(let i=0;i<=5;i++){
        function y(){
            setTimeout(()=>{
                console.log(i);
            },i*1000)
        }
        y()
    }
}


