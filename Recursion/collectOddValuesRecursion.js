function collectOddValuesRecursion(arr){
    let newArray = [];
    if (arr.length === 0){
        return newArray;
    }
    if (arr[0] % 2 !== 0){
        newArray.push(arr[0]);
    }
    newArray = newArray.concat(collectOddValuesRecursion(arr.splice(1)));
    return newArray;

}

console.log(collectOddValuesRecursion([1,2,3,4,5,6,7,9,11,13,15,]))