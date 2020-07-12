/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let left = 0,
		right = s.length - 1;
	let str = s.split('');
	while (left <= right) {
		if (arr.includes(str[left]) && arr.includes(str[right])) {
			[str[left], str[right]] = [str[right], str[left]];
			left++;
			right--;
		}
		if (!arr.includes(str[left])) {
			left++;
		}
		if (!arr.includes(str[right])) {
			right--;
		}
		if (left > right) {
			break;
		}
	}
	return str.join('');
};
// @lc code=end
