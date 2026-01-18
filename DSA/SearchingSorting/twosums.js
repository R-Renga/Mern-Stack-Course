function sortedtwoSum(arr,target){
    let left = 0;
    let right = arr.length-1;
  
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum > target){
            right--
        }else if(sum < target){
            left++
        }else{
            return [left+1,right+1]
        }
    }

}

let results = sortedtwoSum([2,3,4,9],11)