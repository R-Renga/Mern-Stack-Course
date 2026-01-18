//merge


// Problem Statement:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Mergenums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Examples:
// Example 1:
// Input:

// nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3

// Output: [1,2,2,3,5,6]

// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input:

// nums1 = [1], m = 1, nums2 = [], n = 0

// Output:[1]

// Explanation: The arrays we are merging are [1] and []. The result of the merge is [1].

// Example 3:
// Input:

// nums1 = [0], m = 0 nums2 = [1], n = 1

// Output:[1]

// Explanation: The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Time Complexity:
// Time Complexity = O((m+n) log (m+n)) Due to sorting.

// Space Complexity:
// Space Complexity = O(1) Extra (in-place).


let nums1 = [1,2,3]

let nums2 = [2,3,4]

let merge = nums1.concat(nums2)

let final = merge.sort((a,b)=>b-a);

console.log(final);


function merges(nums1,m,nums2,n){
    let ncopy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;
    
    for(let i=0;i<m+n;i++){
        if((ncopy[p1]<nums2[p2] && p1 <m) || p2 >= n){
            nums1[i] = ncopy[p1];
            p1++
        }else{
            nums1[i] = nums2[p2];
            p2++
        }
    }

}


function reverseApproach(nums1,m,nums2,n){
    let p1 = m-1;
    let p2 = n-1;
    for(let i=m+n-1;i>=0;i--){
        if(p2<0) break;
        if(p1>=0 && nums1[p1]>nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        }else{
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1
}

let finalresult = merges(nums1,3,nums2,3);
console.log(finalresult);


const fs = require('fs');
const net = require('net');

console.log('Step 1: Start');


setTimeout(() => {
  console.log('Step 3: TIMERS - setTimeout');
}, 0);


fs.readFile(__filename, () => {
  console.log('Step 4: POLL - File read');
  
 
  setImmediate(() => {
    console.log('Step 5a: CHECK - setImmediate inside I/O');
  });
});


setImmediate(() => {
  console.log('Step 5: CHECK - setImmediate');
});


process.nextTick(() => {
  console.log('Step 2a: process.nextTick');
});

Promise.resolve().then(() => {
  console.log('Step 2b: Promise (Microtask)');
});

console.log('Step 2: End');


