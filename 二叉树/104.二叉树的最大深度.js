/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, level = 0) {
	// BFS
	// if (root === null) return 0;
	// let queue = [root];
	// while (queue.length > 0) {
	// 	let len = queue.length;

	// 	while (len--) {
	// 		//把当前level的queue队列清空，同时把节点左右子节点push
	// 		let first = queue.shift(); // 左出
	// 		if (first.left) queue.push(first.left); // 左子节点入队列
	// 		if (first.right) queue.push(first.right); //右子节点入队列
	// 	}
	// 	level++;
	// }
	// return level;

	// DFS
	if (!root) {
		return 0;
	} else {
		const left = maxDepth(root.left);
		const right = maxDepth(root.right);
		return Math.max(left, right) + 1;
	}
};
// @lc code=end
