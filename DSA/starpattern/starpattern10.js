let n =5;
let toggle = 1;
for(let i=0;i<n;i++){
    let rows = "";
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