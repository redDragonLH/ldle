/**
 * 2095. 删除链表的中间节点
 *
 * 给你一个链表的头节点 head 。删除 链表的 中间节点 ，并返回修改后的链表的头节点 head 。
 * 长度为 n 链表的中间节点是从头数起第 ⌊n / 2⌋ 个节点（下标从 0 开始），其中 ⌊x⌋ 表示小于或等于 x 的最大整数。
 *  * 对于 n = 1、2、3、4 和 5 的情况，中间节点的下标分别是 0、1、1、2 和 2 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head.next) {
    return null;
  }
  let slow = head,
    fast = head,
    pre = null;
  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  pre.next = slow.next;
  return head;
};
/**
 * 执行用时 :6 ms, 在所有 JavaScript 提交中击败了83.54%的用户
 * 内存消耗 :95.45 MB, 在所有 JavaScript 提交中击败了53.17%的用户
 */