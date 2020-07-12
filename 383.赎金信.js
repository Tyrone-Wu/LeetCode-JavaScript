/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	for (const i of ransomNote) {
		if (magazine.indexOf(i) == -1) {
			return false;
		} else {
			magazine = magazine.replace(i, '');
		}
	}
	return true;
};
// @lc code=end
