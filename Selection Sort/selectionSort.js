console.log("Selection Sort Implementation")

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min_item = i;
        for (let j = i + 1; j < arr.length; j++){
           if (arr[j] < arr[min_item]){
               min_item = j;
           }
        }
        if (i !== min_item){
            let  temp = arr[i];
            arr[i] = arr[min_item];
            arr[min_item] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([8,3,1,2,4,5]))