/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let dummy = new ListNode(0);
	dummy.next = head;
	let i = dummy;
	let j = dummy;
	// 让j先走n步
	while (n) {
		j = j.next;
		n--;
	}
	// 一起走！！！
	while (j.next) {
		i = i.next;
		j = j.next;
	}
	// 此时j走到了最后一个节点 i此时是需要删除节点的前一节点
	// 开始链接！！！！
	i.next = i.next.next;
	// 链接成功！！！！
	return dummy.next;
};
// @lc code=end
