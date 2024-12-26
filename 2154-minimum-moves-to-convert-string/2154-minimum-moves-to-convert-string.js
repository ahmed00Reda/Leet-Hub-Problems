/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let counter = 0;
    let sum = 0;
    for(let i = 0; i< s.length; i++) {
        // firstv x to nextv three items
        if (s[i] === "X") {
            sum++
            i +=2
        }
    }
    return sum;

};