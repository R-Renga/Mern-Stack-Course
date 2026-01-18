let n=5;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-i;j++){
        rows = rows + ("*")
    }
    console.log(rows)
}