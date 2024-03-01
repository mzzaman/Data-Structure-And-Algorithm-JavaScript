function nthFibo(n){
    if (n <= 1){
        return n;
    }else{
        return nthFibo(n - 1) + nthFibo( n - 2);
    }
}

console.log(nthFibo(19))