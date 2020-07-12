/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let res = 0;
	let [left, right] = [0, height.length - 1];
	while (left < right) {
		let area = Math.min(height[left], height[right]) * (right - left);
		res = res < area ? area : res;
		height[left] < height[right] ? left++ : right--;
	}
	return res;
};
// @lc code=end
