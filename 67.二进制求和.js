/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let arrA = a.split('').map(Number);
	let arrB = b.split('').map(Number);
	if (arrA.length > arrB.length) {
		for (let i = arrA.length - 1; i >= 0; i--) {
			arrA[i] += arrB.pop() || 0;

			if (arrA[i] > 1) {
				arrA[i] -= 2;
				if (i == 0) {
					arrA.unshift(1);
				} else {
					arrA[i - 1] += 1;
				}
			}
		}
		return arrA.join('');
	} else {
		for (let i = arrB.length - 1; i >= 0; i--) {
			arrB[i] += arrA.pop() || 0;
			if (arrB[i] > 1) {
				arrB[i] -= 2;
				if (i == 0) {
					arrB.unshift(1);
				} else {
					arrB[i - 1] += 1;
				}
			}
		}
		return arrB.join('');
	}
};
// @lc code=end
