/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// 最原始的思路  时间O(n) 空间O(n)
	// let map = {};
	// nums.forEach((i) => {
	// 	map[i] ? map[i]++ : (map[i] = 1);
	// });
	// for (const i in map) {
	// 	if (map[i] == 1) {
	// 		return i;
	// 	}
	// }
	// 位运算
	// let res = 0;
	// for (const i of nums) {
	// 	res ^= i;
	// }
	// return res;
	// 迭代位运算
	// return nums.reduce((pre, cur) => pre ^ cur, 0);
};
// @lc code=end
