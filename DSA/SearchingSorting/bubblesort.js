let arr = [2,3,8,9,4,6];

function bubble(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let swap = false;
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                swap = true;
            }
        }
        if(!swap) break;
    }
}

let result = bubble(arr)
console.log(arr);












function bubblesort(n){
for(let i=0;i<n.length -1;i++){
    let swap = false;
    for(let j=0;j<n.length-1-i;j++){
        if(n[j] > n[j+1]){
            let temp = n[j]
            n[j] = n[j+1];
            n[j+1] = temp
            swap = true;
        }
        
    }
    if(!swap) break;
}

}

let results = bubblesort(arr)
console.log(arr);