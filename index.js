// Problem 1
function identity(a) {
  return a;
}

// Problem 2
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

// Problem 3
function identifyf(a) {
  return function() {
    return a;
  };
}

// Problem 4
function addf(a) {
  return function(b) {
    return a + b;
  };
}

// Problem 5
function applyf(binaryFunction) {
  return function(a) {
    return function(b) {
      return binaryFunction(a, b);
    };
  };
}

// Problem 6
function curry(binaryFunction, a) {
  return function(b) {
    return binaryFunction(a, b);
  };
}

function curry(binaryFunction, a) {
  return applyf(binaryFunction)(a);
}

// Problem 7
inc = addf(1);
inc = applyf(add)(1);
inc = curry(add, 1);

// Problem 8
function methodize(binaryFunction) {
  return function(b) {
    return binaryFunction(this, b);
  };
}
