/**
 * 3217. 从链表中移除在数组中存在的节点
 *
 * 给你一个整数数组 nums 和一个链表的头节点 head。从链表中移除所有存在于 nums 中的节点后，返回修改后的链表的头节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  // Convert nums array to Set for O(1) lookup
  const numSet = new Set(nums);

  // Handle empty list or if head value is in nums
  while (head && numSet.has(head.val)) {
    head = head.next;
  }

  if (!head) return null;

  // Check remaining nodes
  let current = head;
  while (current.next) {
    if (numSet.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
/**
 * 执行用时：93 ms, 在所有 JavaScript 提交中击败了 16.28%的用户
 * 内存消耗：96.77 MB, 在所有 JavaScript 提交中击败了69.77%的用户
 */
