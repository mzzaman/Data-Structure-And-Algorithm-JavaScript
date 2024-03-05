// TODO: Write a function which takes in a string and returns counts of each character in the string.
function charCount(str){
    let strToLower = str.toLowerCase();
    let result = {};

    for (let i = 0; i < strToLower.length; i++){
        if (strToLower[i] !== " "){
            result[strToLower[i]] = result[strToLower[i]] + 1 || 1;
        }
    }
    return result;
}

console.log(charCount("Hello Devil"));