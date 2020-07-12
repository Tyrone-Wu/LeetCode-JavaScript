/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	if (!lists || lists.length == 0) return null;

	return lists.reduce((pre, cur) => {
		if (!pre) return cur;
		if (!cur) return pre;

		let tem;
		if (pre.val < cur.val) {
			tem = new ListNode(pre.val);
			pre = pre.next;
		} else {
			tem = new ListNode(cur.val);
			cur = cur.next;
		}
		let root = tem;

		// ES6语法   时间效率低
		// let root = (tem = new ListNode(Math.min(pre.val, cur.val)));
		// pre.val < cur.val ? (pre = pre.next) : (cur = cur.next);
		while (true) {
			if (!pre) {
				tem.next = cur;
				break;
			}
			if (!cur) {
				tem.next = pre;
				break;
			}
			if (pre.val < cur.val) {
				tem.next = pre;
				pre = pre.next;
			} else {
				tem.next = cur;
				cur = cur.next;
			}
			if (tem.next) {
				tem = tem.next;
			}
		}
		return root;
	});
	// 数组解法
	// if (!lists || lists.length == 0) return null;
	// let arr = [];
	// lists.forEach((list) => {
	// 	while (list) {
	// 		arr.push(list.val);
	// 		list = list.next;
	// 	}
	// });
	// let res = new ListNode(0);
	// let root = res;
	// arr
	// 	.sort((a, b) => a - b)
	// 	.forEach((item) => {
	// 		let tem = new ListNode(item);
	// 		root.next = tem;
	// 		root = root.next;
	// 	});
	// return res.next;
};
// @lc code=end
