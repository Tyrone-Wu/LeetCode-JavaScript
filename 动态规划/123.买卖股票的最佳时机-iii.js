/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0,
		res = [];
	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i] >= prices[i + 1]) {
			res.push(profit);
			profit = 0;
		} else {
			profit++;
			res[i] = profit;
		}
	}
	res.sort((a, b) => a - b);
	console.log(res);

	return res.length < 2 ? res.pop() : res.pop() + res.pop();
};
// @lc code=end
