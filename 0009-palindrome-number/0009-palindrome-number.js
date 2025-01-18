/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const result =x.toString();
    const reverse = result.split('').reverse().join('').toLowerCase();
    return reverse ===result
    
};