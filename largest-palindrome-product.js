// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//took a 2 prong approach: first define what a Palindrome is, and then check for the largest by starting with the largest possible numbers that can be multiplied
function isPalindrome(num) {
  if(num.toString() === num.toString().split('').reverse().join('')) {
    return true;
  }
  return false;
}

//made this function so that a number of any length of digits can be an argument with the parameter 'length'
function palindromeProduct(length) {
  var num1 = Math.pow(10, length) - 1;
  var num2 = Math.pow(10, length) - 1;
  var biggestNum = 0;

  for(var i = num1; i > 0; i--) {
    for(var j = num2; j > 0; j--) {
      //must be a palindrome, and larger than the previously recorded largest number
      if(isPalindrome(i*j) && i*j > biggestNum) {
      	biggestNum = i * j;
      }
    }
  }
  return biggestNum;
}

palindromeProduct(3);

//current computational time is O(n^2)
