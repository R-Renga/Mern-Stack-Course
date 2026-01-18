let n = 5;

for(let i=5;i>=1;i--){
    let rows = "";
    for(let j=0;j<i;j++){
        rows = rows + (j+1)
    }
    console.log(rows)
}

// i<5 - infinite loop 



for(let i=5;i>0;i--){
    let rows = "";
    for(let j=0;j<i;j++){
        rows = rows + (j+1)
    }
    console.log(rows);
}

for(let i=0;i<5;i++){
    let rows = "";
    for(let j=0;j<n-i;j++){
        rows = rows + (j+1)
    }
}


//one more solution

for(let i =0;i<5;i++){
    let row = "";
    for(let j=0;j<n-i;j++){
        row = row + (j+1)
    }
console.log(row)
}


//

let a = 5;

for(let i=0;i<a;i++){
    let rows = "";
    for(let j=0;j<a-i;j++){
        rows = rows + (j+1)
    }
    console.log(rows);
}

for(let i=a;i>0;i--){
    let rows = "";
    for(let j=0;j<i;j++){
        rows = rows + (j+1)
    }
    console.log(rows);
}