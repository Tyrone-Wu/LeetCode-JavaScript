/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

// 递归
var isSymmetric = function (root) {
	if (root === null) return true;
	let help = (left, right) => {
		if (left === null && right === null) {
			return true;
		}
		if (left === null || right === null) {
			return false;
		}

		return (
			left.val === right.val &&
			help(left.left, right.right) &&
			help(left.right, right.left)
		);
	};

	return help(root.left, root.right);
};

// 迭代
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

var isSymmetric = function (root) {
	if (root === null) return true;
	let node = root;
	let queue = [node];
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

// 判断是否对称
function help(arr) {
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
}

// @lc code=end
