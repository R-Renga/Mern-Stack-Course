function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten(arr)); // [3,5,9,3,10,2]



function findLargest(arr) {
    let max = -Infinity;

    for (let item of arr) {
        if (Array.isArray(item)) {
            max = Math.max(max, findLargest(item));
        } else {
            max = Math.max(max, item);
        }
    }
    return max;
}

console.log(findLargest(arr)); // 10
