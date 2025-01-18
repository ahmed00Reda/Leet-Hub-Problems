/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s =  x.toString()
    console.log(s)
    console.log(typeof s)

    const result =x.toString();
    const reverse = result.split('').reverse().join('').toLowerCase();
    return reverse ===result
    
};