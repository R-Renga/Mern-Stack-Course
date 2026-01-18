let n =5;

for(let i=0;i<n;i++){
    let rows = "";
    let toggle = 1;
    for(let j=0;j<=i;j++){
        rows = rows + toggle;
        if(toggle === 1){
            toggle = 0
        }else{
            toggle = 1
        }
    }
    console.log(rows)
}


let a = 5;

for(let i=0;i<a;i++){
    let rows = "";
    let toggle = 1;
    for(let j=0;j<i+1;j++){
        rows = rows + toggle;
        if(toggle === 1){
            toggle = 0
        }else{
            toggle = 1
        }
    }
    console.log(rows)
}