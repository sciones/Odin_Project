const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    low = 0;
    high = 0;

    if (num1 > num2) {
        high = num1;
        low = num2;
    } else {
        low = num1;
        high = num2;
    }

    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
