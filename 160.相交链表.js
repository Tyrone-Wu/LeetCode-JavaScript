/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let [ab, ba] = [headA, headB];
	// 用两个指针不同顺序遍历两个链表   第二次相遇时为公共点
	while (true) {
		if (ab === ba) return ab;

		[ab, ba] = [ab ? ab.next : headB, ba ? ba.next : headA];
	}
};
// @lc code=end
