console.log("Bubble Sort Implementation")


function bubbleSort(arr){
    let temp;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]){
              temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([8,2,4,1,5]))