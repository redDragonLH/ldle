/**
 * 2181. 合并零之间的节点
 * 给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。链表的 开端 和 末尾 的节点都满足 Node.val == 0 。
 * 对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。
 * 返回修改后链表的头节点 head 。
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
var mergeNodes = function (head) {
  let dummy = new ListNode(0);
  let cur = head;
  let nextPosition = dummy;
  while (cur) {
    if (cur.val === 0) {
      let sum = 0;
      let next = cur.next;
      while (next && next.val !== 0) {
        sum += next.val;
        next = next.next;
      }
      if (sum > 0) {
        nextPosition.next = new ListNode(sum);
        nextPosition = nextPosition.next;
      }

      cur.next = next;
    }
    cur = cur.next;
  }
  return dummy.next;
};
/**
 * 执行用时：546 ms, 在所有 JavaScript 提交中击败了48.39%的用户
 * 内存消耗：95.22 MB, 在所有 JavaScript 提交中击败了54.84%的用户
 */
