/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// if (s.length <= 1) {
	// 	return s.length;
	// }
	// let maxLen = 0;
	// let temArr = [];
	// for (let i = 0; i < s.length; i++) {
	// 	if (!temArr.includes(s[i])) {
	// 		temArr.push(s[i]);
	// 	} else {
	// 		temArr = temArr.slice(temArr.indexOf(s[i]) + 1);
	// 		temArr.push(s[i]);
	// 	}
	// 	maxLen = temArr.length > maxLen ? temArr.length : maxLen;
	// }
	// return maxLen;
	let arr = [],
		max = 0;
	for (let i = 0; i < s.length; i++) {
		let index = arr.indexOf(s[i]);
		if (index !== -1) {
			arr.splice(0, index + 1);
		}
		arr.push(s.charAt(i));
		max = Math.max(arr.length, max);
	}
	return max;
};
// @lc code=end
