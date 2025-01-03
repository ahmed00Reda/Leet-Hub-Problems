/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
     let result = [];
    let binary = 0;
    for(let num of nums){
        binary = (binary % 5) * 2 + num;
        let checkBinary = ( binary % 5 == 0);
        result.push(checkBinary);
    }
    return result
    
};