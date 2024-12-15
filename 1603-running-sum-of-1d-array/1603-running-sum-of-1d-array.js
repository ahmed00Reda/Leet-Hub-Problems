/**
 * @param {number[]} nums
 * @return {number[]}
 */
//    sumWithInitial = nums.reduce((accumulator, currentValue) =>
//          accumulator + currentValue,0);

var runningSum = function(nums) {
    let newArr = []
    sum=0
    for(i in nums){
        newArr[i]=sum+nums[i]
        sum+=nums[i]
    }
    return newArr
    
};