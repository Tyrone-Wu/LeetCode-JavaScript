/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 思路：比较当前的节点是否相同，在比较左右节点的值是否相同，并依次递归
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	let isSame = (l, r) => {
		if (!l && !r) return true;
		if ((!l && r) || (l && !r)) return false;
		if (l.val != r.val) return false;
		return isSame(l.left, r.left) && isSame(l.right, r.right);
	};
	return isSame(p, q);
};
// @lc code=end
