let one = 0;
let two = 1;
console.log(one);
console.log(two);

for (let i = 0; i <= 18; i++){
    let newSeries = one + two;
    console.log(newSeries);
    two = one;
    one = newSeries;
}