let userName: string;
let userAge = 30;

function add(a: number, b = 5) {
    return a + b;
}

console.log(add(10));
console.log(add(12, 10));

