/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = []
    for(let i in indices){
        arr[indices[i]]= s[i]
    } 
   return arr.join("")
    
};