/**
 * 1290. 二进制链表转整数
 *
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
 * 请你返回该链表所表示数字的 十进制值 。
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  let result = 0;
  while (head) {
    result = (result << 1) | head.val; // 左移一位并加上当前节点的值
    head = head.next; // 移动到下一个节点
  }
  return result; // 返回最终的十进制值
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :54.09 MB, 在所有 JavaScript 提交中击败了52.11%的用户
 */