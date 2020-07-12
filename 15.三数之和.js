/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// 首先进行排序
	nums.sort((a, b) => a - b);

	// 创建结果保存数组
	let res = [],
		len = nums.length;

	if (nums[0] <= 0 && nums[len - 1] >= 0) {
		// 中间位数字
		for (let i = 0; i < nums.length - 2; ) {
			// 优化2: 最左值为正数则一定无解
			if (nums[i] > 0) break;

			let first = i + 1;
			let last = len - 1;
			do {
				// 两人选相遇，或者三人同符号，则退出
				if (first >= last || nums[i] * nums[last] > 0) break;

				let result = nums[i] + nums[first] + nums[last];
				if (result === 0) {
					// 如果可以组队
					res.push([nums[i], nums[first], nums[last]]);
				}
				if (result <= 0) {
					// 实力太弱，把菜鸟那边右移一位
					while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
				} else {
					// 实力太强，把大神那边右移一位
					while (first < last && nums[last] === nums[--last]) {}
				}
			} while (first < last);
			while (nums[i] === nums[++i]) {}
		}
	}

	return res;
};
// @lc code=end
