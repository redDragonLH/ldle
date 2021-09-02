/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 *
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 *
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 单向链表只能从前往后走,所以查也只能从前往后查,但是不保存中间数据,查倒数的时候还得轮询一遍
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  return arr[arr.length - k];
};
/**
 * 增加了n的额外空间,但是因为只是保存的引用,所以问题不大
 * 
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了81.55%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了38.29%的用户
 */