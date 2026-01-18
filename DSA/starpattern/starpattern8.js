let n = 5;

for(let i=0;i<n;i++){
    let rows = "";
    for(let j=0;j<n-(i+1);j++){
        rows += "_"
    }
    for(let k=0;k<=i;k++){
        rows += "*"
    }
    console.log(rows)
}

let a=5;

for(let i =0;i<a;i++){
    let rows = "";
    for(let j=0;j<a-(i+1);j++){
        rows += "_";
    }
    for(let k=0;k<=i;k++){
        rows = rows + ('*')
    }
    console.log(rows);
}