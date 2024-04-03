function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  function getPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
  }
  
  // Test the function
  console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]