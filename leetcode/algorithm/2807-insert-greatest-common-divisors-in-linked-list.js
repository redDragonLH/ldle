/**
 * 2807. 在链表中插入最大公约数
 *
 * 给你一个链表的头 head ，每个结点包含一个整数值。
 * 在相邻结点之间，请你插入一个新的结点，结点值为这两个相邻结点值的 最大公约数 。
 * 请你返回插入之后的链表。
 * 两个数的 最大公约数 是可以被两个数字整除的最大正整数。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 主要逻辑在于最大公约数的计算，然后就是遍历了
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let node = head;
  while (node.next != null) {
    node.next = new ListNode(gcd(node.val, node.next.val), node.next);
    node = node.next.next;
  }
  return head;
};
/**
 * 取得最大公约数
 * 辗转相除
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
var gcd = function (a, b) {
  while (b != 0) {
    // 余数如果为零说明b是最大公约数
    // 如果不为零则把余数作为除数，上一个除数作为被除数
    let tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};
/**
 * 官方题解
 * gcd 为主要逻辑操作，也就是取得最大公约数
 */