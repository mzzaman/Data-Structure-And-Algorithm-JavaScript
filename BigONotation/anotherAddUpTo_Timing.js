function anotherAddUpTo_Timing(n){
    return n * ( n + 1 ) / 2;
}

let time1 = performance.now();
anotherAddUpTo_Timing(100000);
let time2 = performance.now();

console.log(`Time Elapsed: ${ (time2 - time1) /1000} seconds.`)