console.log("Bubble Sort Implementation")

function bubbleSortOptimize(arr){
    let swap;
    for (let i = arr.length; i > 0; i--){
        swap = true;
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]){
               swap = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = swap;
               swap = false;
            }
        }
        if (swap){
            break;
        }
    }
    return arr;
}

console.log(bubbleSortOptimize([8,2,5,1,3,4]))