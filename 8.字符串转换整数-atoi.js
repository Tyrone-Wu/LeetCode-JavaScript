/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
	// let res = str.trim().match(/^(\d|-)(\d)+/g);
	// if (res && res.toLocaleString() > Number.MAX_SAFE_INTEGER) {
	// 	return Number.MAX_SAFE_INTEGER;
	// } else if (res && res.toLocaleString() < Number.MIN_SAFE_INTEGER) {
	// 	return Number.MIN_SAFE_INTEGER;
	// }
	// console.log(res && res.toLocaleString());

	// return res;
	const number = parseInt(str, 10);

	if (isNaN(number)) {
		return 0;
	} else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
		return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
	} else {
		return number;
	}
};
// @lc code=end
