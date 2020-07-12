/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	// let obj = {};
	// for (const i of s) {
	// 	// 简化写法
	// 	obj[i] ? obj[i]++ : (obj[i] = 1);
	// 	// if (obj[i]) {
	// 	// 	obj[i]++;
	// 	// } else {
	// 	// 	obj[i] = 1;
	// 	// }
	// }
	// for (const key in obj) {
	// 	if (obj[key] == 1) {
	// 		return s.indexOf(key);
	// 	}
	// }
	// return -1;
	var index = -1;
	for (var i = 0; i < s.length; i++) {
		var uniQue = true;
		for (var j = 0; j < s.length; j++) {
			if (i != j && s[i] == s[j]) {
				uniQue = false;
				break;
			}
		}

		if (uniQue) {
			index = i;
			break;
		}
	}

	return index;
};
// @lc code=end
