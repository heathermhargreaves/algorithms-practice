// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


//ideas: can increment by 20 and then check if it's divisible by 2-19?
//num as parameter is the highest number in the range we want the end number to be divisible by
function smallestMultiple(num) {
    var gcd = function(a,b) {
      while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
      }
      return (a < 0) ? -a : a;
    };

}

smallestMultiple(20)
