function sumOfArray(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

let result = sumOfArray([1,2,3,4,5,6,7,8,9,10]);
console.log(result)