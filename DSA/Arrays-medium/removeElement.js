// Problem Statement:
// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.


// Consider the number of elements in nums which are not equal to val be k. To get accepted, you need to:

// Modify nums such that the first k elements contain elements not equal to val. The remaining elements beyond k do not matter. Return k.

// Examples:
// Example 1:
// Input: nums = [3,2,2,3], val = 3

// Output: 2, nums = [2,2,_,_]

// Explanation: The first 2 elements should be 2. Underscores represent irrelevant values.

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2

// Output: 5, nums = [0,1,4,0,3,_,_,_]

// Explanation: The first 5 elements should be any order of [0,1,4,0,3].

// Approach:
// Use pointerx to track where the next non-val element should go.
// Traverse the array with index i.
// If nums[i] != val, assign nums[x] = nums[i]and increment x.
// Time Complexity:
// Time Complexity = O(n), where n = nums.length.

// Space Complexity:
// Space Complexity = O(1)(constant extra space).

// Dry Run


// let nums = [3,6,4,5,3,4,6,1]

// function removeElement(nums,val){
//     let x = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== val){
//             nums[x] = nums[i];
//             x++
//         }
//     }
//     return x
// }




function removeElement (arr,val){
    let x = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== val){
            arr[x] = arr[i]
            x++;
        }
    }
    console.log(x)
    arr.length = x;
    return arr
 }
 
 let result = removeElement([2,5,9,3,6,5,2],2);
 console.log(result)