/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let  max  = 0
    let current = 0 
    for( let m of s){
        if(m === "(") {
           current++
           max=Math.max(max,current)
            }
        else if(m === ")") {
            current--
            }
            if(current<0){
                return -1 
            }

    }
    
     return max

    
};