/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let pre = 0,
		max = nums[0];
	nums.forEach((i) => {
		// 记录计算过程的最大值
		pre = Math.max(pre + i, i);
		// 记录结果
		max = Math.max(max, pre);
	});
	return max;
};
// @lc code=end
