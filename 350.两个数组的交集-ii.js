/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let res = [];

	nums1.forEach((i) => {
		if (nums2.includes(i)) {
			nums2.splice(nums2.indexOf(i), 1);
			res.push(i);
		}
	});
	return res;
};
// @lc code=end
