/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
	let slowPointer = head;
	let fastPointer = head;
	while (fastPointer && fastPointer.next) {
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;
		if (slowPointer === fastPointer) {
			slowPointer = head;
			let pos = 0;
			while (slowPointer !== fastPointer) {
				pos++;
				slowPointer = slowPointer.next;
				fastPointer = fastPointer.next.next;
			}
			return fastPointer;
		}
	}
	return null;
};
// @lc code=end
