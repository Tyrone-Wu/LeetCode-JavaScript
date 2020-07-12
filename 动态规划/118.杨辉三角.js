/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	// let res = [];
	// if (!numRows) return res;
	// res[0] = [1];
	// if (numRows == 1) return res;
	// res[1] = [1, 1];
	// if (numRows == 2) return res;

	// for (let i = 2; i < numRows; i++) {
	// 	let tem = new Array(i + 1);
	// 	tem.fill(1);
	// 	for (let j = 1; j < tem.length - 1; j++) {
	// 		tem[j] = res[i - 1][j - 1] + res[i - 1][j];
	// 	}
	// 	res.push(tem);
	// }
	// return res;

	if (!numRows) return [];
	let r = Array(numRows);
	r[0] = [1];
	for (let i = 1; i < numRows; i++) {
		r[i] = [];
		r[i - 1].reduce((p, c) => {
			r[i].push(p + c);
			return c;
		}, 0);
		r[i].push(1);
	}
	return r;
};
// @lc code=end
