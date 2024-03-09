/*
function binarySearch(arr, value){
    let start = 0;
    let ends = arr.length - 1;
    let middle = Math.floor((start + ends) / 2);

    while (arr[middle] !== value && start <= ends){
       if (value < arr[middle]) {
           ends = middle - 1;
       }else{
           start = middle + 1;
       }
       middle = Math.floor((start + ends) / 2);
    }
    //if (arr[middle] === value){
       // return middle;
    //}
    // return -1;

}

 */

function binarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (value !== middle && start <= end){
        if (value < arr[middle]){
            end = middle - 1;
        }else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30],15))
//console.log(binarySearch([1,2,3,4,5,6,7,8,9],6))
