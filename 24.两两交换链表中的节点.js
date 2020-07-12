/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
	// // 递归
	// if (head == null || head.next == null) {
	// 	return head;
	// }
	// // 获得第 2 个节点
	// let next = head.next;

	// [head.next, next.next] = [swapPairs(next.next), head];
	// return next;

	// 非递归
	let point = new ListNode(0);
	point.next = head;
	let tem = point;

	while (tem.next != null && tem.next.next != null) {
		let start = tem.next,
			end = start.next;

		[tem.next, start.next] = [end, end.next];
		// tem.next = end;
		// start.next = end.next;
		[end.next, tem] = [start, start];
		// end.next = start;
		// tem = start;
	}
	return point.next;
};
// @lc code=end
