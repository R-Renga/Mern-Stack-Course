let timer;

function debounce(value){
    clearTimeout(timer)

    timer = setTimeout(()=>{
        console.log(value);
    },1000)
}

debounce("i")
debounce("p")
debounce("hone")

