console.log("Bubble Sort Implementation")
function bubbleSort2(arr){
    let temp;
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]){
              temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
            }
        }
        console.log('ONE PASS COMPLETED!')
    }
    return arr;
}
console.log(bubbleSort2([8,2,4,1,5]))
