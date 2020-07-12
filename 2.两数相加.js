/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let curNode1 = l1,
		curNode2 = l2;
	while (curNode1) {
		curNode1.val = curNode1.val + (curNode2 ? curNode2.val : 0);
		if (curNode1.val >= 10) {
			curNode1.val -= 10;
			if (curNode1.next) {
				curNode1.next.val += 1;
			} else {
				curNode1.next = new ListNode(1);
			}
		}
		if (!curNode1.next) {
			curNode1.next = curNode2 ? curNode2.next : null;
			curNode2 = null;
		}
		curNode1 = curNode1.next;
		curNode2 = curNode2 ? curNode2.next : null;
	}
	return l1;
};
// @lc code=end
