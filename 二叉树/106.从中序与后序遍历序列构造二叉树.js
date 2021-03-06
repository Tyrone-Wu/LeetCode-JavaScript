/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	if (!inorder.length) return null;

	let key = postorder.length - 1,
		mid = inorder.indexOf(postorder[key]);

	let root = new TreeNode(postorder[key]);

	root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
	root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, key));
	return root;
};
// @lc code=end
