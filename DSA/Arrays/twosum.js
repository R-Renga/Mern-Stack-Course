function twosum(arr,target){
    let map = {};
    for(let i=0;i<arr.length;i++){
        map[arr[i]] = i
    }

    for(let i =0;i<arr.length;i++){
        let pairtofind = target - arr[i];
        if(map[pairtofind] && map[pairtofind] !== i){
            return [i,map[pairtofind]]
        }
    } 
    return null;
}

twosum([3,4,5,6,1,9],11 )


var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}






 



 