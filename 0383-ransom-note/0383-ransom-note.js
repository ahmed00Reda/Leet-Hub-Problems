/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let Hash = {};

    for (let c of magazine) {
        Hash[c] = (Hash[c] || 0) + 1;
    }

    for (let c of ransomNote) {
        if (!Hash[c] || Hash[c] <= 0) {
            return false;
        }
        Hash[c]--;
    }
    
    return true;   
    
};