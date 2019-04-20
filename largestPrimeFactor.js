exports.largestPrimeFactor = function (n) {
  var primeNumber = 0;
  let numberArray = [];

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      numberArray.push(i);
      n /= i;
    }
  }
  for (let j = numberArray.length; j > 0; j--) {
    if (numberArray[j] > numberArray[j-1]){
      primeNumber = numberArray[j];
    }
  }
  
  return primeNumber
};
