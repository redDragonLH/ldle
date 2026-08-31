/**
 * 2058. 找出临界点之间的最小和最大距离
 *
 * 链表中的 临界点 定义为一个 局部极大值点 或 局部极小值点 。
 * 如果当前节点的值 严格大于 前一个节点和后一个节点，那么这个节点就是一个  局部极大值点 。
 * 如果当前节点的值 严格小于 前一个节点和后一个节点，那么这个节点就是一个  局部极小值点 。
 * 注意：节点只有在同时存在前一个节点和后一个节点的情况下，才能成为一个 局部极大值点 / 极小值点 。
 * 给你一个链表 head ，返回一个长度为 2 的数组 [minDistance, maxDistance] ，其中 minDistance 是任意两个不同临界点之间的最小距离，maxDistance 是任意两个不同临界点之间的最大距离。如果临界点少于两个，则返回 [-1，-1] 。
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    // 只有当链表长度大于等于 3 时，才可能存在临界点
    // 如果链表长度小于 3，则直接返回 [-1, -1]
    // 通过遍历链表，找到所有临界点的索引，并计算最小距离和最大距离
  if (head && head.next && head.next.next) {
    let pre = head; // 前一个节点
    let cur = head.next; // 当前节点
    let next = head.next.next; // 下一个节点
    let index = 1; // 当前节点的索引
    let firstIndex = -1; // 第一个临界点的索引
    let lastIndex = -1; // 上一个临界点的索引
    let minDistance = Number.MAX_SAFE_INTEGER; // 最小距离

    while (next) {
        // 判断当前节点是否为临界点
      if (
        (cur.val > pre.val && cur.val > next.val) ||
        (cur.val < pre.val && cur.val < next.val)
      ) {
        // 如果是临界点，更新 firstIndex、lastIndex 和 minDistance
        if (firstIndex === -1) {
          firstIndex = index;
        } else {
          minDistance = Math.min(minDistance, index - lastIndex);
        }
        lastIndex = index;
      }
      pre = cur;
      cur = next;
      next = next.next;
      index++;
    }
    // 遍历结束后，判断是否存在足够的临界点
    if (firstIndex === -1 || lastIndex === -1 || firstIndex === lastIndex) {
      return [-1, -1];
    }
    // 返回最小距离和最大距离
    return [minDistance, lastIndex - firstIndex];
  }
  // 如果链表长度小于 3，则直接返回 [-1, -1]
  return [-1, -1];
};
/**
 * 执行用时 :7 ms, 在所有 JavaScript 提交中击败了86.36%的用户
 * 内存消耗 :82.80 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */