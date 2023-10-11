function isPalindrome(inputString) {
  // Remove non-alphabet characters and convert to lowercase
  inputString = inputString.replace(/[^a-z]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedString = inputString.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  return inputString === reversedString;
}

// Test cases
console.log(isPalindrome("abba"));      // Output: true
console.log(isPalindrome("racecar"));   // Output: true
console.log(isPalindrome("a"));         // Output: true
console.log(isPalindrome("robot"));     // Output: false
console.log(isPalindrome("ab"));        // Output: false

// Export the function for testing
module.exports = isPalindrome;
