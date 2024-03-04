function isAnagram(str1, str2){
    // Check Input are null or undefined;
    if (!str1 || !str2){
        return false;
    }
    // Check Parameters length are same or not;
    if (str1.length !== str2.length){
        return false;
    }
    const anagram = {};


    // loop for first input;
    for (let first of str1){
        anagram[first] ? (anagram[first] += 1) : (anagram[first] = 1);
    }

    console.log(anagram);

    // loop for second input;
    for (let second of str2){
        if (!anagram[second]){
            return false
        }
        anagram[second] -= 1;
    }
    console.log(anagram)
    return true;
}

console.log(isAnagram('hello', 'olleh'));
console.log(isAnagram('silent', 'listen'))
console.log(isAnagram('martin','nitram'))
console.log(isAnagram('cat','tag'))
console.log(isAnagram('rat', 'tar'))