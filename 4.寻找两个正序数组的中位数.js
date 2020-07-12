/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	let temArr = nums1.concat(nums2).sort((a, b) => a - b),
		len = temArr.length;
	if (len % 2 != 1) {
		let num1 = temArr[len / 2 - 1],
			num2 = temArr[len / 2];
		return (num1 + num2) / 2;
	} else {
		return temArr[Math.floor(len / 2)];
	}
};
// @lc code=end
