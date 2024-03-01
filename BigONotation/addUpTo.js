function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let printOne = addUpTo(6);
console.log(printOne)

let printTwo = addUpTo(10);
console.log(printTwo)

let printThree = addUpTo(50);
console.log(printThree)

let printFour = addUpTo(100);
console.log(printFour)