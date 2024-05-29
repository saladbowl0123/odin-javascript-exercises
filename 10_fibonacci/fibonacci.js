const fibonacci = function(num) {
  // switch cases use strict comparison `===`, so convert string to int
  num = parseInt(num);
  if (num < 0) return "OOPS";
  switch (num) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
