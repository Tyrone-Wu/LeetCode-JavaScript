/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	// 有一个为空或者两个为空的情况
	if (!l2 || !l1) return l1 || l2;

	let res;
	if (l1.val > l2.val) {
		res = new ListNode(l2.val);
		l2 = l2.next;
	} else {
		res = new ListNode(l1.val);
		l1 = l1.next;
	}

	let head = res;

	while (true) {
		// 如果其中一个已经循环完成 则直接加上另一个的剩余部分跳出循环
		if (!l2) {
			res.next = l1;
			break;
		} else if (!l1) {
			res.next = l2;
			break;
		}

		// 判断下一节点
		if (l1.val < l2.val) {
			res.next = l1;
			l1 = l1.next;
		} else {
			res.next = l2;
			l2 = l2.next;
		}
		res = res.next;
	}
	return head;
};
// @lc code=end
