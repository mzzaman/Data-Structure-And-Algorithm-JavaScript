function insertionSort(arr){
    let len = arr.length;
    for (let i = 0; i< len; i++){
        let insertIndex = i;
        let currentValue = arr.splice(i, 1)[0];
        for (let j = i - 1; j >= 0; j--){
            if (arr[j] > currentValue){
                insertIndex = j;
            }
        }
        arr.splice(insertIndex, 0, currentValue);
    }
    return arr;
}

let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(insertionSort(myArray))