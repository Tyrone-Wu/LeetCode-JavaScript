/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * 即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行。
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
		// 设置标签 判断遍历的顺序
		leftToRight = true;

	while (queue.length) {
		let len = queue.length;
		let temArr = [];
		if (leftToRight) {
			while (len--) {
				let tem = queue.shift();
				temArr.push(tem.val);
				// 先左后右
				if (tem.left) queue.push(tem.left);
				if (tem.right) queue.push(tem.right);
			}
		} else {
			while (len--) {
				let tem = queue.pop();
				temArr.push(tem.val);
				// 先右后左
				if (tem.right) queue.unshift(tem.right);
				if (tem.left) queue.unshift(tem.left);
			}
		}
		res.push(temArr);

		// 每遍历完一层转变标签值
		leftToRight = !leftToRight;
	}
	return res;
};
// @lc code=end
