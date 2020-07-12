/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let val = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I',
	];

	let res = '',
		loop = 0;
	while (loop < keys.length) {
		while (num >= keys[loop]) {
			num -= keys[loop];
			res += val[loop];
		}
		loop++;
	}
	return res;
};
// @lc code=end
