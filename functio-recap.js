// nth = (n-1)th + (n-2)th


function fibonacci(number) {
    let fibo = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacci(15));