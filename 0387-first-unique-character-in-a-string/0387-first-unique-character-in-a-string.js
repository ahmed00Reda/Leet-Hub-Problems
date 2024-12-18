/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashTable = {};
  
  for (let char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
  }
  for(c in hashTable){
    console.log(hashTable[c])
    if(hashTable[c]==1){
        return s.indexOf(c)
    }
   
  }
   return -1 

    
};