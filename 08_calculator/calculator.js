const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(numbers) {
  const sumOfNumbers = numbers.reduce((total, number) => total + number, 0);
  return sumOfNumbers;
};

const multiply = function(numbers) {
  const productOfNumbers = numbers.reduce((total, number) => total * number, 1);
  return productOfNumbers;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(number) {
	let total = 1;
  for (let f = number; f > 0; f--) {
    total *= f;
  }

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
