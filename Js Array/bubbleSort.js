console.log(`<============ DSA Bubble Sort =====================>`);

let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(my_array);
let n = my_array.length;
for (let i = 0; i < n - 1; i++){
    for (let j = 0; j < n - i - 1; j++ ){
        if (my_array[j] > my_array[j + 1]){
            let temp = my_array[j];
            my_array[j] = my_array[j+1];
            my_array[j + 1] = temp;
        }
    }
}
console.log("Sorted array: ", my_array);

// Todo: Bubble Sort Improvement;
console.log(`<========Bubble Sort Improvement======>`)
let my_array2 = [7, 3, 9, 12, 11];
console.log(my_array2);
let nth = my_array2.length;
for (let i = 0; i < nth - 1; i++){
    let swapped = false;
    for (let j = 0; j < nth - i - 1; j++){
        if (my_array2[j] > my_array2[j + 1]){
            [my_array2[j], my_array2[j+1]] = [my_array2[j+1], my_array2[j]];
            swapped = true;
        }
    }
    if (!swapped){
        break;
    }
}
console.log("Sorted array:", my_array2);



console.log(`<======== Bubble Sort Improvement Using Function ======>`)

function isBubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let swap = false;
        for (let j = 0; j < len - i - 1; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap){
            break
        }
    }
    return arr;
}

let printSortArray = isBubbleSort([10, 15, 21, 11]);
console.log(printSortArray)