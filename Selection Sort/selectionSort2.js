console.log('Selection Sort Implementation')
// ES5;
function selectionSort2(arr){
    const swap = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length; i++){
        let lowestValue = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[lowestValue]){
                lowestValue = j;
            }
        }
        if (i !== lowestValue){
            swap(arr, i, lowestValue);
        }
    }
    return arr;
}
console.log(selectionSort2([8,3,1,2,4,5]))