function linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            return i
        }
    }
    return -1
}


let result = linear([2,5,8,9],5);
console.log(result);

//o(n)