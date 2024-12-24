/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length!==arr.length) return false;
    arr.sort()
    target.sort()
    console.log(arr+"DDD"+target)
    console.log(arr.toString()==target.toString())
    if(arr.toString()==target.toString()){
        return  true
    } 
    return false

    
};