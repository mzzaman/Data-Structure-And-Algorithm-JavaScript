/*
function removeVowels(str) {
   // Base Case
    if (str === ''){
        return '';
    }

    // Check First Character In Vowels
    const checkFirstChar = str[0].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // If the first character is vowels,
    // skip it and recursively call the function on the rest of the string
    if (vowels.includes(checkFirstChar)){
        return removeVowels(str.slice(1));
    }

    // If the first character is not a vowel,
    // concatenate it with the result of recursively calling the function on the rest of the string
    return str[0] + removeVowels(str.slice(1));
}


 */

function removeVowels(str){
    if (str === '') {
        return '';
    }
    const checkFirstChar = str[0].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(checkFirstChar)) {
        return removeVowels(str.slice(1));
    }
    return str[0] + removeVowels(str.slice(1));
}
console.log(removeVowels('hello'));


