/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// if (!nums.length || !nums.includes(target)) return -1;
	// return nums.indexOf(target);

	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		const mid = start + ((end - start) >> 1);

		if (nums[mid] === target) return mid;

		if (nums[mid] >= nums[start]) {
			// [start,mid]有序

			// target 在[start,mid]之间
			if (target >= nums[start] && target <= nums[mid]) {
				end = mid - 1;
			} else {
				//target 不在 [start, mid] 之间
				start = mid + 1;
			}
		} else {
			// [mid,end]有序

			//target 不在 [mid, end] 之间
			if (target >= nums[mid] && target <= nums[end]) {
				start = mid + 1;
			} else {
				//target 不在 [mid, end] 之间
				end = mid - 1;
			}
		}
	}
	return -1;
};
// @lc code=end
