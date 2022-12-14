function isPalindrome(word) {
  // Write your algorithm here
   // reverse the input string
  function reverseString(word) {
    return word.split("").reverse().join("");
}
const reversedWord = reverseString(word);
// compare the reversed string to the input
  return word === reversedWord
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
