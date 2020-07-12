/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	if (!s) return 0;
	let temArr = s.trim().split(' ');
	return temArr.pop().length;
};
// @lc code=end
