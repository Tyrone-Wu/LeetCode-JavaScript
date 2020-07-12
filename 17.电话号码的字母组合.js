/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length == 0) return [];
	let obj = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz',
	};
	if (digits.length == 1) return obj[digits].split('');

	let input = digits.split('');
	let res = [];

	// 完成前两个的拼接
	for (var i = 0; i < obj[input[0]].length; i++) {
		for (var j = 0; j < obj[input[1]].length; j++)
			res.push(obj[input[0]].charAt(i) + obj[input[1]].charAt(j));
	}

	// 在完成前两个拼接的基础上加入后续循环拼接
	for (var i = 2; i < input.length; i++) {
		var a1 = obj[input[i]];
		let smallarr = [];
		// 前面的和现在最新的一项拼接
		for (var j = 0; j < res.length; j++) {
			for (var k = 0; k < a1.length; k++) {
				smallarr.push(res[j] + a1[k]);
			}
		}
		res = smallarr;
	}
	return res;
};
// @lc code=end
