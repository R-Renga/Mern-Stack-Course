// Problem Statement:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Examples:
// Example 1:
// Input: nums = [2, 2, 1]

// Output: 1

// Example 2:
// Input: nums = [4, 1, 2, 1, 2]

// Output: 4

// Example 3:
// Input: nums = [1]

// Output: 1

// Constraints:
// 1 ≤ nums.length ≤ 3 × 104
// -3 × 104 ≤ nums[i] ≤ 3 × 104
// Each element appears twice except one that appears only once.
// Approach 1 (Brute-force Hash Map):
// Create an empty hash map to store counts of each element.
// Loop through the array, update the count for each element.
// Loop again to find the element with count 1 and return it.
// Time Complexity:
// Time Complexity = O(n) We traverse the array twice: once for counting and once for checking.

// Space Complexity:
// Space Complexity = O(n) The hash map may store counts for up to n elements in the worst case.

// Dry Run




//xor

function singleNumber(arr){
    let xor = 0;
    for(let i=0;i<arr.length;i++){
        xor = xor^arr[i]
    }
    return xor;
};

let result = singleNumber([4,4,1,1,0,0,2,3,3])

console.log(result);


function single(arr){
    let hash = {};
    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
           hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]] == 1){
            return nums[i]
        }
    }
}


let number = [2,2,3,4,5,5,6,6]

let hashsecond = {};

for(let i=0;i<number.length;i++){
    if(!hashsecond[number[i]]){
        hashsecond[number[i]] = 1
    }else{
        hashsecond[number[i]]++;
    }
}

for(let j=0;j<number.length;j++){
    if(hashsecond[number[i]] === 1){
        console.log(number[i]);
        
    }
}