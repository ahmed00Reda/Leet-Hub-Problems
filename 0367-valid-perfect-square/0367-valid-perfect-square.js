/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     if (num < 0) return false; 
  return Number.isInteger(Math.sqrt(num));
    
};