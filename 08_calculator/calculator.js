const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0); 
  
	
};

const multiply = function(array) {
  return array.reduce(function(accumulator, currentValue){
    return accumulator * currentValue;
  }, 1); 

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(factorial) {
  let currentValue = 1
  for (let i = factorial; i > 0; i--) {
    currentValue = currentValue * i;
  }
	return currentValue;
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
