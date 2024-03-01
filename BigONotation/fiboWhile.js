let numberOne = 0;
console.log(numberOne)
let numberTwo = 1;
console.log(numberTwo)
let sum;
let i = 2;
while ( i <= 19){
    sum = numberOne + numberTwo;
    console.log(sum)
    numberOne = numberTwo;
    numberTwo = sum;
    i += 1;
}