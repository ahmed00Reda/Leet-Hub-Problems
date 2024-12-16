/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    
    // soleved using hashTable
    // let Hash = {};
    // for (let c of magazine) {
    //     Hash[c] = (Hash[c] || 0) + 1;
    // }
    // for (let c of ransomNote) {
    //     if (!Hash[c] || Hash[c] <= 0) {
    //         return false;
    //     }
    //     Hash[c]--;
    // }
    
    // return true;   
    
     if (ransomNote.length > magazine.length) {
        return false;
    }

    for (const c of new Set(ransomNote)) {
        if (magazine.split(c).length - 1 < ransomNote.split(c).length - 1) {
            return false;
        }
    }

    return true;   
};