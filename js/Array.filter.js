// Define a callback function.
function CheckIfPrime(value, index, ar) {
	console.log("value="+value);
	console.log("index="+index);
	console.log("ar="+ar);
    high = Math.floor(Math.sqrt(value)) + 1;
	console.log("high="+high);

    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    } 
    return true;
}

// Create the original array.
var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];

// Get the prime numbers that are in the original array. 
var primes = numbers.filter(CheckIfPrime);
console.log(primes);

document.write(primes);
// Output: 31,37,41,43,47,53
// Create the original array.
var arr = [5, "element", 10, "the", true];

// Create an array that contains the string
// values that are in the original array.
var result = arr.filter(
    function (value) {
        return (typeof value === 'string');
    }
);

document.write(result);
// Output: element, the
