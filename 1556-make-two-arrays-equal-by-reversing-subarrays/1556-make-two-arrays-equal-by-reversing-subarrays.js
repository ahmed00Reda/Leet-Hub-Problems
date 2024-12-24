/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let sortArr = [...arr].sort()

     let sortTarget = [...target].sort()

     return JSON.stringify(sortTarget) == JSON.stringify(sortArr)
    

    
};