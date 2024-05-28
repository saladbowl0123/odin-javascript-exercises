const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
	let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
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
