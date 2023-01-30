/**
 * 1669. 合并两个链表
 *
 * 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
 *
 * 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let header = list1;
  let position = 0;
  let replaceA = list1;
  let father = list1;
  let tail2 = getTail(list2);
  while (header) {
    if (position === a) {
      replaceA = father;
    }
    if (position === b + 1) {
      replaceA.next = list2;
      tail2.next = header;
      return list1;
    }
    position++;
    father = header;
    header = header.next;
  }
  return list1;
};

let getTail = (node) => {
  let header = node;
  while (header) {
    if (!header.next) return header;
    header = header.next;
  }
};
