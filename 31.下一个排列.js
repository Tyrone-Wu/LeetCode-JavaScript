/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let len = nums.length;

	for (let i = len - 1; i > 0; i--) {
		if (nums[i] > nums[i - 1]) {
			let tem = i;
			let min = i - 1;
			for (let j = i; j < len; j++) {
				if (nums[j] < nums[tem]) {
					tem = j;
				}
			}
			[nums[min], nums[tem]] = [nums[tem], nums[min]];

			let left = nums.slice(0, min + 1);
			let right = nums.slice(min).sort((a, b) => a - b);

			return [1, 2];
		}
	}
	// return nums.sort((a, b) => a - b);
};
// @lc code=end
