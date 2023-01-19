function Fibonacci(num) {
    let a = 0;
    let b = 1;
    let array = [a, b];
    for (let i = 1; array[i] <= num; i++) {
        if (a > b) {
            b += a;
            array = [...array, b];
        } else {
            a += b;
            array = [...array, a];
        }
    }
    return array;
}

const num_fibonacci = Fibonacci(1000);
console.log(num_fibonacci);
