/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let result = new Array(code.length).fill(0);
    // k ===0 statement
    // if(k===0){
    //     return result;
    // }
    let  length = code.length 
    for(let i = 0 ; i< length ; i ++){
        if(k>0){
            for(let j=i+1; j <= i+k;j++ ){
                result[i]+= code[j%length]
            }
        }
        else{
            for(let j =i - Math.abs(k);j<i;j++ ){
                result[i]+=code[(j+length)%length]
            }
        }
    }
    return result ;
    
   


    
};