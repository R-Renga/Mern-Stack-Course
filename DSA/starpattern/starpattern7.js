let n =5;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-i;j++){
        rows = rows + (i+1)
    }
    console.log(rows)
}



for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-(i+1);j++){
        rows = rows + ("_")
    }
    for(let k=0;k<=i;k++){
        rows = rows + ("*")
    }
    console.log(rows);
}