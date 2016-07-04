/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsMap = {};
    var result = [];
    for (var i = 0, len = nums.length; i < len;i++) {
        var num = nums[i];
        var temp = target - num;

        if(numsMap[num] === undefined){
            numsMap[temp] = i;
        } else {
            result = [numsMap[num], i];
            break;
        }
    }
    return result;
};