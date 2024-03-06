function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if (helperInput.length === 0){
            return 0;
        }
        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
       helper(helperInput.slice(1));
    }
    helper(arr)
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,9,11,13,15,]))