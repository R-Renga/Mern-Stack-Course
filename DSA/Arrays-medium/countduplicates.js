// let nums = [3,5,6,2,2,2,4,4,4];

// function countDuplicate(nums){
//     let count = {};
//     for(let i =0;i<nums.length;i++){
//       count[nums[i]] = (count[nums[i]]||0)+1
//     }
//     let final = Object.keys(count).filter(data => count[data] = 1)
//     return final; 
// }


// let result = countDuplicate(nums);
// console.log(result);


let nums = [2,3,5,2,2,4,9,1];

function countDuplicates(nums){
  let count = {};
  for(let i =0;i<nums.length;i++){
    count[nums[i]] = (count[nums[i]] || 0)+1
  }
  let final = Object.keys(count).filter(data => count[data] > 1);

  return final

}


nums = countDuplicates(nums);
console.log(nums);