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

function intersection(arr1,arr2){
    let store = new Set(arr2);
    let result = [];
    for(let i = 0;i<arr1;i++){
        if(store.has(arr[i])){
            result.push(arr[i])
            store.delete(arr[i])
        }
    }
    return result;
}

