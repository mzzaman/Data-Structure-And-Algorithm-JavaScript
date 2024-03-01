
/*
let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
let n = my_array.length;

for (let i = 0; i < n; i++){
    let min_index = i;
    for (let j = i + 1; j < n; j++){
        if (my_array[j] < my_array[min_index]){
            min_index = j;
        }
    }
    // Swap elements
    [my_array[i],my_array[min_index]] = [my_array[min_index], my_array[i]];
}

console.log(my_array)

 */

function selectionSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++){
        let min_index = i;
        for (let j = i + 1; j < len; j++){
            if (arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        [arr[i],arr[min_index]] = [arr[min_index],arr[i]]
    }
    return arr;
}
let printSelectionSort = selectionSort([64, 34, 25, 12, 22, 11, 90, 5]);
console.log(printSelectionSort)