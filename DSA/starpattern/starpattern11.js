let n = 5;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-(i+1);j++){
        rows = rows + "_"
    }
    for(let k=0;k<(2*i+1);k++){
        rows = rows + "*"
    }
    console.log(rows)
}

