/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
	if (!root) return false;
	// 递归
	sum -= root.val;

	if (root.left == null && root.right == null) {
		return sum == 0;
	}
	return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);

	// 迭代
	// let stack = [root];
	// let sumStack = [sum - root.val];
	// while (stack.length > 0) {
	// 	let node = stack.pop();
	// 	let curSum = sumStack.pop();
	// 	if (!node.left && !node.right && curSum === 0) {
	// 		return true;
	// 	}
	// 	if (node.right) {
	// 		stack.push(node.right);
	// 		sumStack.push(curSum - node.right.val);
	// 	}
	// 	if (node.left) {
	// 		stack.push(node.left);
	// 		sumStack.push(curSum - node.left.val);
	// 	}
	// }
	// return false;
};
// @lc code=end
