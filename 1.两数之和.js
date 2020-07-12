/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	while (nums.length) {
		let last = nums.pop();
		if (nums.indexOf(target - last) > -1) {
			return [nums.indexOf(target - last), nums.length];
		}
	}
};
// @lc code=end
