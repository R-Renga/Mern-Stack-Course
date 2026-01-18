function longodd(s){
    let n= s.length-1;
    while(n >=0){
        if(s[n] % 2 == 1){
            return s.substring(0,n+1)
        }
        --n
    }
    return s
}

let results = longodd("2345678")
console.log(results);