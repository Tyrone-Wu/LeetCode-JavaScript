/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	// let len = digits.length;
	// digits[len - 1]++;
	// for (let i = len - 1; i >= 0; i--) {
	// 	if (digits[i] >= 10) {
	// 		digits[i] -= 10;
	// 		if (i == 0) {
	// 			digits.unshift(1);
	// 		} else {
	// 			digits[i - 1] += 1;
	// 		}
	// 	}
	// }
	let arr = digits.join(''); // 数组转字符串
	let num = BigInt(arr) + 1n + ''; // BigInt 可以表示任意大的整数
	let arr2 = num.split('');
	let endArr = arr2.map(Number);
	return endArr;
};
// @lc code=end
