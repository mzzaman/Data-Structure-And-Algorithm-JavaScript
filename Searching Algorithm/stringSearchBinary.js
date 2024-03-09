function subString(str, item){
    let count = 0;
    for (let i =0 ; i < str.length; i++){
       for (let j = 0; j < item.length; j++){
           if(item[j] !== str[i + j]){
               break;
           }
           if (j === item.length - 1){
               count++;
           }
       }
    }
    return count;
}

console.log(subString("hello world from another world and want to travel another world", 'world'));