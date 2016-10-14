//Find the largest prime factor of a number

function largestPrimeFactor(number) {
  //set iterator to 2 since it is the smallest possible factor of a non-prime number
  var i = 2;
  //
  while (i <= number) {
    //check if number is divisible by iterator
    if (number % i == 0) {
        //if number is divisible by iterator, divide number by iterator to 'take out' that factor
        number /= i;
    } else {
        //otherwise increase the iterator to check for new prime factor
        i++;
    }
  }
  //the last iterator that the number is divisible by is the largest prime factor
  return i;
}


var a = 4598349590 ;

largestPrimeFactor(a)
