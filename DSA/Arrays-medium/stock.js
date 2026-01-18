// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Examples:
// Example 1:
// Input:prices = [7, 1, 5, 3, 6, 4]

// Output:5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

// Example 2:
// Input:prices = [7,6,4,3,1]

// Output:0

// Explanation: Explanation: In this case, no transactions are done and the max profit = 0.

let arr = [7, 1, 5, 3, 6, 4];

function stock(arr){
    let min = arr[0];
    let max = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]-min > max){
            max = arr[i]-min
        }

        if(arr[i]<min){
            min = arr[i];
        }
    }
    return max;
}


let result = stock(arr);
console.log(result);


//double loop approch also there


function sell(nums){
    let max = 0
    let min = arr[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i] - min > max){
            max = nums[i]-min
        }
        if(nums[i]<min){
            min = nums[i]
        }
    }
    return max
}