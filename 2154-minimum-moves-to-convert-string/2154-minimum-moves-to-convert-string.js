/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let  r = 0
    let  l = 0 
    while( l < s.length){
        if(s[l]=="X"){
            r++
            l+=2
        }
        l++
    }  
    return r  
};