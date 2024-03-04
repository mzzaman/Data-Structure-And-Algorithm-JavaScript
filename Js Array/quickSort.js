console.log(`<=====================Quicksort Implementation======================>`)
/*
function partition(array, low, high){
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++ ){
        if (array[j] <= pivot){
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i+1],array[high]] = [array[high],array[i+1]]
    return i +1;
}


function quickSort(array, low = 0, high = array.length - 1){
    if (low < high){
        let pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
}

let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
quickSort(my_array);
console.log("Sorted Array: ", my_array);

 */

/*
function partition(array, low, high){
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++){
        if (array[j] <= pivot){
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i+1]];
    return i + 1;
}


function quickSort(array, low=0, high=array.length-1){
    if (low < high){
        let pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex-1);
        quickSort(array, pivotIndex+1, high);
    }
}

let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
quickSort(myArray);
console.log("Sorted Array: ", myArray);
 */

function partition(array, low, high){
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++){
        if (array[j] <= pivot){
            i++;
            [array[j], array[j]] = [array[j], array[i]];
        }
    }
    [array[i+1], array[high]] = [array[high], array[i+1]];
    return i+1;
}

function quickSort(array, low=0, high=array.length-1){
    if (low < high){
        let pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex-1);
        quickSort(array, pivotIndex+1, high);
    }
}
let sortIt = [64, 34, 25, 12, 22, 11, 90, 5];
quickSort(sortIt);
console.log("Sorted Array: ", sortIt);