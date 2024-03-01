/*
function fibonacci(number){
    if (number === 1)
        return 0;

    if (number === 2)
        return  1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log("Fibonacci (5): " + fibonacci(5));
*/



console.log(0);
console.log(1);
let count = 2;

function fibonacci(prev1, prev2) {
    if (count <= 19) {
        const newFibos = prev1 + prev2;
        console.log(newFibos);
        prev2 = prev1;
        prev1 = newFibos;
        count++;
        fibonacci(prev1, prev2);
    }
}

fibonacci(1, 0);
