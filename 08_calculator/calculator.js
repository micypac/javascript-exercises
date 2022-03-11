const add = function(num1=0, num2=0) {
	return num1 + num2;
};

const subtract = function(num1=0, num2=0) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, item) => {
    return total += item
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => {
    return total *= item;
  })
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	if (num == 1 || num == 0) {
    return 1;
  } else {
    return num * this.factorial(num - 1);
  }
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
