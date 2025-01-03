/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
      let stv = 0;

    return nums.map((bit) => {

        stv = stv*2 + bit;

        stv %= 5;

        return stv == 0


    })
    
};