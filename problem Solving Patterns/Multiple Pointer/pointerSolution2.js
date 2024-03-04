// TODO: Challenge 2:
// Implement a function called countUniqueValues,
// which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array,
// but it will always be sorted.

function countUniqueValues(arr){
    let sortArray = arr.sort();
    if (sortArray.length === 0 && !sortArray){
        return false;
    }
    let array = [];
    for (let i = 0; i < sortArray.length; i++){
        if (sortArray[i] !== sortArray[i + 1]){
            array.push(sortArray[i])
        }
    }
    return array.length;
}

console.log(countUniqueValues([1,1,1,2]) )// 2

console.log(countUniqueValues([1,2,3,4,5,5,5,6,6,7])) //7

console.log(countUniqueValues([2,3,3,3,6,6,6,6])) //3