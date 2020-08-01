/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
	if (root === null) return 0;

	// BFS 广度遍历 最后一层即为最大深度
	let queue = [root];
	while (queue.length > 0) {
		let len = queue.length;
		while (len--) {
			//把当前level的queue队列清空，同时把节点左右子节点push
			let first = queue.shift(); // 左出
			if (first.left) queue.push(first.left); // 左子节点入队列
			if (first.right) queue.push(first.right); //右子节点入队列
		}
		level++;
	}
	return level;

	// DFS 深度递归  求最大值
	const left = maxDepth(root.left);
	const right = maxDepth(root.right);
	return Math.max(left, right) + 1;
};
// @lc code=end
