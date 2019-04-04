exports.largestPrimeFactor = function (n) {
  var primeNumber = 0;
  let numberArray = [];
  while (n > 2) {
    if (n % 2 === 0) {
      n = n / 2;
      numberArray.push(n);
    }
    if (n % 3 === 0) {
      n = n / 3;
      numberArray.push(n);
    }
    if (n % 5 === 0) {
      n = n / 5;
      numberArray.push(n);
    }
    if (n % 7 === 0) {
      n = n / 7;
      numberArray.push(n);
    }
    primeNumber = n;
  }
  console.log(numberArray);
  return primeNumber;
};
console.log(exports.largestPrimeFactor(20))