function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++
        }else{
           result.push(arr2[j]);
           j++;
        }
    }
    while (i < arr1.length){
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result;
}
function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);

}
//console.log(merge([1,10,50],[2,14,99,100]));
console.log(mergeSort([10,24,76,73]));