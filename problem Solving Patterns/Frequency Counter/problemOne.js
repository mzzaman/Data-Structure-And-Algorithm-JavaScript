function sameSquared(array1, array2){

    // Check input are null or undefined,
    if (!array1 || !array2){
        return false;
    }

    // Check input are same length or not,

    if (array1.length !== array2.length){
        return  false;
    }


    // Avoid Nested loops

    const lookup = {};

    // Loop for first input;
    for (let value of array1){
        lookup[value * value] = (lookup[value * value] || 0) + 1;
    }
    console.log(lookup)
    // Loop for second input;
    for (let secondValue of array2){
        if (!lookup[secondValue]){
            return false;
        }else {
            lookup[secondValue] -= 1;
        }
    }
    console.log(lookup)
    return true;
}

console.log(sameSquared([1, 2, 3], [4, 1, 9]));