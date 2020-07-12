/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
	let res = new Map();

	points.forEach((i) => [res.set(i[0] * i[0] + i[1] * i[1], i)]);

	let key = res.keys();
	console.log(key);
};
// @lc code=end
