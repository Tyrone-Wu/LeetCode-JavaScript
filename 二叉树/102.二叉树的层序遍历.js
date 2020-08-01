/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	let queue = [root],
		res = [];
	while (queue.length) {
		let len = queue.length;
		let temArr = [];
		while (len--) {
			let tem = queue.shift();
			temArr.push(tem.val);
			tem.left && queue.push(tem.left);
			tem.right && queue.push(tem.right);
		}
		res.push(temArr);
	}
	return res;
};
// @lc code=end
