const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num <= 2) return 1;
    let num1 = 1;
    let num2 = 2;
    let total = 0;
    for (let n = 0; n < num - 3; n++) {
        let temp = num2;
        total = num1 + num2;
        num2 = total;
        num1 = temp;
    }
    return total;
};

/*
const fibonacci = fib();
function fib(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fib(num - 1) + fib (num - 2)
}
*/

// Do not edit below this line
module.exports = fibonacci;
