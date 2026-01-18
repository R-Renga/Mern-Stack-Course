let running = false;

function throttling(){
    if(running) return

    running = true;

    setTimeout(()=>{
        running = false
    },1000)
}

throttling()
throttling()
throttling()


