/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const result = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    reverse = result.split('').reverse().join('').toLowerCase();
    return reverse ===result
    
};