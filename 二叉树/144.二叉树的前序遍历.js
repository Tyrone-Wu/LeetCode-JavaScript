/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
	// 递归
	let stack = [];
	let preorder = (node) => {
		if (node) {
			stack.push(node.val);
			preorder(node.left);
			preorder(node.right);
		}
	};
	if (root) preorder(root);
	return stack;

	// 迭代
	// if (!root) return [];
	// let stack = [root],
	// 	res = [];
	// while (stack.length) {
	// 	let node = stack.pop();
	// 	res.push(node.val);
	// 	// 重点  先压又孩子  再压左孩子
	// 	if (node.right) stack.push(node.right);
	// 	if (node.left) stack.push(node.left);
	// }
	// return res;
};
// @lc code=end
