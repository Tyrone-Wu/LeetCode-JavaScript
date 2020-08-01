/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
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
 * @return {boolean}
 */

// 递归 通过辅助函数递归判断
var isSymmetric = function (root) {
	if (root === null) return true;
	// 辅助函数
	let help = (left, right) => {
		if (left === null && right === null) return true;
		if (left === null || right === null) return false;

		return (
			left.val === right.val &&
			help(left.left, right.right) &&
			help(left.right, right.left)
		);
	};

	return help(root.left, root.right);
};

/**
 * 迭代一
 * 借助队列 判断左边节点与右边节点是否相等
 */
var isSymmetric = function (root) {
	let queue = [root, root];
	while (queue.length > 0) {
		let l = queue.shift();
		let r = queue.shift();
		if (l === null && r === null) continue;
		if (l === null || r === null) return false;
		if (l.val !== r.val) return false;

		// 对称性加入
		queue.push(l.left);
		queue.push(r.right);
		queue.push(l.right);
		queue.push(r.left);
	}
	return true;
};

/**
 * 迭代二
 * 借助队列 广度遍历 判断每层的节点是否对称
 */
var isSymmetric = function (root) {
	if (root === null) return true;
	let node = root;
	let queue = [node];

	// 辅助函数 判断数组是否对称
	let help = (arr) => {
		let left = 0,
			right = arr.length - 1;
		while (left < right) {
			if (arr[left] === null || arr[right] === null) {
				if (arr[left] !== arr[right]) {
					return false;
				}
			} else {
				if (arr[left].val !== arr[right].val) {
					return false;
				}
			}
			left++;
			right--;
		}
		return true;
	};

	// 层序遍历二叉树
	while (queue.length > 0) {
		if (!help(queue)) {
			return false;
		}
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			node = queue.shift();
			if (node !== null) {
				queue.push(node.left);
				queue.push(node.right);
			}
		}
	}
	return true;
};

// @lc code=end
