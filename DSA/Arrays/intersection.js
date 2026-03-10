function intersectionLinked(headA,headB){
    let store = new Set();
    while(headB){
        store.add(headB);
        headB = headB.next
    }
    while(headA){
        if(store.has(headA)){
            return headA
        }
        headA = headA.next
    }
    return null;
}

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
}


let result = intersection([2,3,4,9],[7,3,9,5]);
console.log(result);
