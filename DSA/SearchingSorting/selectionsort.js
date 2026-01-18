let arr = [2,3,8,9,4,6];

// let p = arr;
// p.sort

function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let min = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
       
    }
}



let result = selectionSort(arr)
console.log(arr);


function select(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let min = 0;
        for(let j=i+1;j<n;j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if(min != i){
           let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp; 
        }
    }
}