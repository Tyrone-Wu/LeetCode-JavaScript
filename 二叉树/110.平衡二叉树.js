/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
	const res = isNodeBalanced(root);
	return res >= 0 ? true : false;
};

function isNodeBalanced(root) {
	if (!root) return 0;
	const left = isNodeBalanced(root.left);
	const right = isNodeBalanced(root.right);
	if (left < 0 || right < 0) return -1; //短路机制，有一个子树不满足条件就直接返回

	return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;

	// if (!root) return 0;
	// let queue = [root];
	// let level = 0;
	// while (queue.length) {
	// 	level++;
	// 	let len = queue.length;
	// 	while (len--) {
	// 		let tem = queue.shift();
	// 		if (tem.left) queue.push(tem.left);
	// 		if (tem.right) queue.push(tem.right);
	// 	}
	// }
	// return level;
}
// @lc code=end
