console.log("Bubble Sort Implementation")

function bubbleSort3(arr){
    const swap = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i-- ){
        for (let j= 0; j < i - 1; j++){

            if (arr[j] > arr[j + 1]){
                swap(arr, j, j+1);
            }
        }

    }
    return arr;
}

console.log(bubbleSort3([10,15,12,11,9,7,55,56,3,7,77]));