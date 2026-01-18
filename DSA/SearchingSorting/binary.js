function binary(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(right >= left){
        let middle = Math.floor((left+right)/2);
        if(target === arr[middle]){
            return middle
        }else if(target < arr[middle]){
            right = middle-1
        }else{
            left = middle+1
        }
    }
    return -1
}

let result = binary([2,5,8,9],87);
console.log(result);

//o(logn)


//why >= 

//[10, 20, 30] example this one