/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	let absx = n < 0 ? 1 / x : x;
	let absn = n < 0 ? -n : n;
	let res = 1.0;
	while (absn > 0) {
		if (absn & 1) {
			res *= absx;
		}
		absx *= absx;
		absn >>>= 1;
	}
	return res;
};
// @lc code=end
