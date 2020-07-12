/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root || root.length == 0) return null;
	let queue = [root];
	while (queue.length > 0) {
		let tem = queue.shift();
		[tem.left, tem.right] = [tem.right, tem.left];
		if (tem.left) queue.push(tem.left);
		if (tem.right) queue.push(tem.right);
	}
	return root;
};
// @lc code=end
