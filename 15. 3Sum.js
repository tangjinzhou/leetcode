/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    var done = {};
    var resultMap = {};
    nums.sort(function(a, b) {return a - b;});
    for (var i = 0, len = nums.length; i < len; i++) {
        var num = nums[i];
        if (!done[num] && num <= 0) {
            done[num] = true;
            twoSum(nums, i, resultMap, result);
        }
    }
    return result;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, t, resultMap, result) {
    var numsMap = {};
    var target = -nums[t];
    for (var i = t + 1, len = nums.length; i < len; i++) {
        var num = nums[i];
        var temp = target - num;
        if (!numsMap[num]) {
            numsMap[temp] = true;
        } else {
            var k = [-target, temp, num].join(',');
            if (!resultMap[k]) {
                resultMap[k] = true;
                result.push([-target, temp, num]);
            }
        }
    }
    return result;
}
