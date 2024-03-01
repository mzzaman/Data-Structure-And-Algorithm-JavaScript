function doubleOfArray(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(2 * arr[i])
    }
    return newArray;
}

let showDouble = doubleOfArray([1,2,3,4,5,6,7,8,9,10]);
console.log(showDouble)