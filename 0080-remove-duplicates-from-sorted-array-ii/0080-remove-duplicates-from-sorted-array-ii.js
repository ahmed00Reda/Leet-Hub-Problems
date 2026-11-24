/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    if (n < 2) {
        return n;
    }

    let k = 2;
    for (let j = 2; j < n; ++j) {
        if (nums[j] != nums[k - 2]) {
            nums[k] = nums[j];
            ++k;
        }
    }
    return k;
};