/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
	if (!root) return [];
	let queue = [root],
		res = [],
		leftToRight = true;
	while (queue.length) {
		let len = queue.length;
		let temArr = [];
		if (leftToRight) {
			while (len--) {
				let tem = queue.shift();
				temArr.push(tem.val);
				if (tem.left) queue.push(tem.left);
				if (tem.right) queue.push(tem.right);
			}
		} else {
			while (len--) {
				let tem = queue.pop();
				temArr.push(tem.val);
				if (tem.right) queue.unshift(tem.right);
				if (tem.left) queue.unshift(tem.left);
			}
		}
		res.push(temArr);

		leftToRight = !leftToRight;
	}
	return res;
};
// @lc code=end
