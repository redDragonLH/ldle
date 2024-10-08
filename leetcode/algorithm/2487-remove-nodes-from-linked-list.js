/**
 * 2487. 从链表中移除节点
 *
 * 给你一个链表的头节点 head 。
 * 移除每个右侧有一个更大数值的节点。
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
 * 山脉数组
 * 思路较简单,边界条件有点多
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let node = head;
  let data = [];
  while (node) {
    data.push(node.val);
    node = node.next;
  }
  let len = data.length;
  let benchmark = data[len - 1];
  len -= 2;
  while (len > -1) {
    if (data[len] < benchmark) {
      data[len] = 0;
    } else {
      benchmark = data[len];
    }
    len--;
  }
  let index = 0;
  node = head;
  let result, prev;
  while (data[index] !== undefined) {
    console.log(data[index], index);
    if (data[index]) {
      if (!result) {
        result = node;
        prev = node;
      } else {
        prev.next = node;
      }
      prev = prev.next;
    }
    node = node.next;
    index++;
  }
  return result;
};
/**
 * 失败
 */

/**
 * 官方题解 递归
 */
var removeNodes = function(head) {
    if (head == null) {
        return null;
    }
    // 递归代码所在的位置表示实际的逻辑操作是从后往前处理的
    head.next = removeNodes(head.next);
    // 当前节点小于下一个节点,就直接返回下一个节点
    if (head.next != null && head.val < head.next.val) {
        return head.next;
    } else {
        return head;
    }
};