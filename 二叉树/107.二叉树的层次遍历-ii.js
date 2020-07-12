/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
	// if (!root) return [];
	// let queue = [root];
	// let res = [];
	// while (queue.length > 0) {
	// 	let len = queue.length;
	// 	let temArr = [];
	// 	while (len--) {
	// 		let tem = queue.shift();
	// 		temArr.push(tem.val);
	// 		if (tem.left) queue.push(tem.left);
	// 		if (tem.right) queue.push(tem.right);
	// 	}
	// 	res.push(temArr);
	// }
	// return res.reverse();

	// 递归
	let res = [];
	let deepf = (node, level) => {
		if (!node) {
			return;
		}
		res[level] ? res[level].push(node.val) : (res[level] = [node.val]);
		level++;
		deepf(node.left, level);
		deepf(node.right, level);
	};
	deepf(root, 0);
	return res.reverse();
};
// @lc code=end
