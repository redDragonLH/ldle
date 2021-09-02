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

/**
 * 双指针也可以解决,第一个指针正常遍历,在遍历k个之后第二个指针也进入,这样第一个指针到头之后第二个指针停在正好的位置上
 */
var getKthFromEnd = function (head, k) {
  let fast = head,
    slow = head;
  let pos = 0;
  while (fast) {
    if (pos < k - 1) {
      slow = slow.next;
    }
    fast = fast.next;
    pos++;
  }
  return slow;
};

/**
 * 双指针法
 * 
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了99.88%
 * 的用户内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了13.64%的用户
 */