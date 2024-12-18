/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

     for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1

    // another solution using hash map
    // const map = {};
    
    // for (const char of s) {
    //     map[char] = (map[char] || 0) + 1;
    // }
    
    
    // for (let i = 0; i < s.length; ++i) {
    //     if (map[s[i]] === 1) {
    //         return i;
    //     }
    // }
    // return -1;
    
};