const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(x, y) {
  let total = 1;
	for (let i = 0; i < y; i++) total *= x;
  return total;
};

const factorial = function(x) {
  let total = 1;
  if (x <= 1) return 1;
	for (let i = x; i > 1; i--) total *= i;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
