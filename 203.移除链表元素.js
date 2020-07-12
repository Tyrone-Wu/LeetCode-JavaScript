/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}

	let root = (head = new ListNode(0));
	arr
		.filter((i) => i != val)
		.forEach((i) => {
			head.next = new ListNode(i);
			head = head.next;
		});

	return root.next;
	// let root = (pre = null),
	// 	cur = head;
	// while (cur.next) {
	// 	let tem = cur.next;
	// 	if (cur.val == val) {
	// 		pre.next = tem;
	// 	}
	// 	cur = tem;
	// 	pre = pre.next;
	// }
	// return root;
};
// @lc code=end
