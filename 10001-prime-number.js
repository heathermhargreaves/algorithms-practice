// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function isPrime(num) {
	var output = true;
	for (var i = 2 ; i < num ; i++) {
	    if (num % i === 0)  {
	       return output = false;
	    }
	}
	return output;
}

function nthPrime(num) {
	var count = 0
	for (var i=2 ; i<100000000 ; i++)  {
	    if (isPrime(i) === true) {
	        count += 1;
	    }
	    if (count === num) {
	        return i;
	    }
	}
}

nthPrime(10001)
