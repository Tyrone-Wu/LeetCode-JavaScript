/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
	// 迭代
	// let count = 0;
	// let cur = head;
	// while (count != k && cur != null) {
	// 	cur = cur.next;
	// 	count++;
	// }
	// if (count == k) {
	// 	cur = reverseKGroup(cur, k);
	// 	while (count != 0) {
	// 		let tem = head.next;
	// 		head.next = cur;
	// 		cur = head;
	// 		head = tem;
	// 		count--;
	// 	}
	// 	head = cur;
	// }
	// return head;

	// 递归
	// 反转两个之间的链表
	// let resverNode = (a, b) => {
	// 	let pre;
	// 	let cur = a;
	// 	let next = b;
	// 	while (cur != b) {
	// 		next = cur.next;
	// 		cur.next = pre;
	// 		pre = cur;
	// 		cur = next;
	// 	}
	// 	return pre;
	// };
	// let a = (b = head);
	// for (let i = 0; i < k; i++) {
	// 	if (!b) return head;
	// 	b = b.next;
	// }

	// let newHead = resverNode(a, b);
	// a.next = reverseKGroup(b, k);
	// return newHead;

	// 栈实现
	let stack = [];
	let point = new ListNode(0);
	let pre = point;
	while (true) {
		let count = 0;
		let cur = head;

		while (cur && count < k) {
			stack.push(cur);
			cur = cur.next;
			count++;
		}
		if (count != k) {
			pre.next = head;
			break;
		}

		while (stack.length) {
			pre.next = stack.pop();
			pre = pre.next;
		}
		pre.next = cur;
		head = cur;
	}
	return point.next;
};
// @lc code=end
