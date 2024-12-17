/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const charCount = {};

  // Count characters in string `s`
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare with characters in string `t`
  for (let char of t) {
    if (!charCount[char]) {
      return char; // Extra character found
    }
    charCount[char]--;
  }

};