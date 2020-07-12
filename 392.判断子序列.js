/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	for (const i of s) {
		if (t.indexOf(i) == -1) {
			return false;
		} else {
			t = t.slice(t.indexOf(i) + 1);
		}
	}
	return true;
};
// @lc code=end
