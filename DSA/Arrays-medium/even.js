let arr = [2,4,5,6,7,8];

for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0){
        arr[i] = arr[i] * 2
    }
}

console.log(arr);