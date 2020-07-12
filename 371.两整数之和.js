/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 加法可以通过&运算和^运算实现：
 * 两个二进制数相加，^运算的结果是不考虑进位时的结果
 * 两个二进制数相加，&运算的结果是对应为是否有进位，如果结果出现1的话，则左移（<<）1位后和^运算的结果继续做加法，直到&运算的结果为0，此时&运算的结果就是两个数的和

 */
var getSum = function (a, b) {
	return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
// @lc code=end
