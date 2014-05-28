function identity(a) {
  return a;
}

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function identifyf(a) {
  return function() {
    return a;
  };
}

function addf(a) {
  return function(b) {
    return a + b;
  };
}
