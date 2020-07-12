/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let start = 0,
		end = nums.length - 1;
	let mid;
	while (start <= end) {
		mid = (start + end) >> 1;
		if (nums[mid] === target) break;

		if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	if (start > end) return [-1, -1];

	let i = mid,
		j = mid;

	while (nums[i] === nums[i - 1]) i--;
	while (nums[j] === nums[j + 1]) j++;
	return [i, j];
};
// @lc code=end
