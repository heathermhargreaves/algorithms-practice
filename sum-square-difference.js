// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function arraySqrsSum(num) {
  var total = 0;
  for(var i = 1; i <= num; i++) {
    total += (i * i);
  }
  return total
}

function arraySumSqrd(num) {
  var count = 0;
  for(var i = 1; i <= num; i++) {
    count += i;
  }
  return count * count;
}

function sumDiffSqs(num) {
  return arraySumSqrd(num) - arraySqrsSum(num);
}
