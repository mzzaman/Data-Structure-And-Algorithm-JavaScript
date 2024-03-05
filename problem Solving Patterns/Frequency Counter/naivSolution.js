function same(arr1, arr2){
    if (!arr1 || !arr2){
        return false;
    }

    if (arr1.length !== arr2.length){
        return false;
    }

    arr1 = arr1.sort((a,b) => b - a);
    console.log("Sorted 1: ",arr1)
    arr2 = arr2.sort((a,b) => b - a);
    console.log("Sorted 2: ",arr2)

    let len = arr1.length - 1;
    console.log(len)
    for (let i = 0; i <= len; i++){
        let square = arr1[i] * arr1[i];
        if (square !== arr2[i]){
            return false;
        }
    }
    return true;

}

console.log(same([2, 5, 1, 3], [25, 4, 9, 1]))  // return true
