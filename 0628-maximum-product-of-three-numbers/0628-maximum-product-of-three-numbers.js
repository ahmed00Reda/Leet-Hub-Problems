/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    nums.sort((a, b) => a - b); 
     let option1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

    let option2 = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(option1, option2);
};
    