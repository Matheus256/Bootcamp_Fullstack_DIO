let N = parseInt(gets());

let sqrt5 = Math.sqrt(5);
let parte1 = (1.0 + sqrt5) / 2;
let parte2 = (1.0 - sqrt5) / 2;
let fib = (Math.pow(parte1, N) - Math.pow(parte2, N)) / sqrt5;
print(fib.toFixed(1));
