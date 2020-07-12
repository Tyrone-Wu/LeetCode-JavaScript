/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	let res = [1];

	for (let i = 0; i < rowIndex; i++) {
		res.unshift(0);
		for (let j = 0; j < i + 1; j++) {
			res[j] = res[j] + res[j + 1];
		}
	}
	return res;
};
// @lc code=end
