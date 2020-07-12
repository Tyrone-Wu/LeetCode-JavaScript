/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	if (!root) return 0;
	// 递归
	// const left = minDepth(root.left);
	// const right = minDepth(root.right);
	// return left === 0 || right === 0
	// 	? 1 + left + right
	// 	: 1 + Math.min(left, right);

	// 广度遍历
	let queue = [root];
	let level = 0;
	while (queue.length) {
		level++;
		let len = queue.length;
		while (len--) {
			let tem = queue.shift();
			if (!tem.left && !tem.right) {
				return level;
			}
			if (tem.left) queue.push(tem.left);
			if (tem.right) queue.push(tem.right);
		}
	}
	return level;
};
// @lc code=end
