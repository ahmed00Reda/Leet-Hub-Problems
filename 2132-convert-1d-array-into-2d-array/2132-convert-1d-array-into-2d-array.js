/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let answer = []
        if(original.length !== m*n){
            return answer
        }

        for(let j = 0; j < n * m; j += n){
         answer.push(original.slice(j,n + j))
        } 
     

   return answer 
    
};