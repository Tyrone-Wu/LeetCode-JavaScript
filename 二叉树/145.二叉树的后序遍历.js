/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	// 递归
	// let res = [];
	// let postorder = (node) => {
	// 	if (node) {
	// 		postorder(node.left);
	// 		postorder(node.right);
	// 		res.push(node.val);
	// 	}
	// };
	// if (root) {
	// 	postorder(root);
	// }
	// return res;

	// 迭代
	if (!root) return [];

	let stack = [root];
	res = [];
	while (stack.length) {
		let node = stack.pop();
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
		res.unshift(node.val);
	}
	return res;
};
// @lc code=end
