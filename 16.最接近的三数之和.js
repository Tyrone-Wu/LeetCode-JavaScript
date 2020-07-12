/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);
	let res = nums[0] + nums[1] + nums[2];
	/**
	 * 基本解法
	 * 求三数之和，与初始值做比较，得到最接近值。
	 */
	// for (let i = 0; i < nums.length - 2; i++) {
	// 	let left = i + 1,
	// 		right = nums.length - 1;
	// 	while (left != right) {
	// 		let sum = nums[i] + nums[left] + nums[right];
	// 		if (Math.abs(sum - target) < Math.abs(res - target)) {
	// 			res = sum;
	// 		}
	// 		sum > target ? right-- : left++;
	// 	}
	// }
	// return res;
	/**
	 * 双指针优化
	 * 求三数之和，与初始值做比较，得到最接近值。
	 */
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1,
			right = nums.length - 1;
		while (left != right) {
			//判断最大值情况
			let min = nums[i] + nums[left] + nums[left + 1];
			if (target < min) {
				if (Math.abs(res - target) > Math.abs(min - target)) res = min;
				break;
			}
			//判断最大值情况
			let max = nums[i] + nums[right] + nums[right - 1];
			if (target > max) {
				if (Math.abs(res - target) > Math.abs(max - target)) res = max;
				break;
			}

			let sum = nums[i] + nums[left] + nums[right];
			// 三数之和等于目标值
			if (sum == target) return sum;

			if (Math.abs(sum - target) < Math.abs(res - target)) {
				res = sum;
			}
			if (sum > target) {
				right--;
				while (left != right && nums[right] == nums[right + 1]) right--;
			} else {
				left++;
				while (left != right && nums[left] == nums[left - 1]) left++;
			}
			while (i < nums.length - 2 && nums[i] == nums[i + 1]) i++;
		}
	}
	return res;
};
// @lc code=end
