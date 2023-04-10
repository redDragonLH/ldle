/**
 * 1019. 链表中的下一个更大节点
 *
 * 给定一个长度为 n 的链表 head
 *
 * 对于列表中的每个节点，查找下一个 更大节点 的值。也就是说，对于每个节点，找到它旁边的第一个节点的值，这个节点的值 严格大于 它的值。
 *
 * 返回一个整数数组 answer ，其中 answer[i] 是第 i 个节点( 从1开始 )的下一个更大的节点的值。如果第 i 个节点没有下一个更大的节点，设置 answer[i] = 0 。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 感觉可以用栈处理,就是得注意位置对准了
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let result = [];
  let node = head;
  let index = 0;
  let stock = [{ val: node.val, index: index }];

  while (node) {
    while (stock.length && stock[stock.length - 1].val < node.val) {
      let item = stock.pop();
      result[item.index] = node.val;
    }
    stock.push({ val: node.val, index: index });
    ++index;
    node = node.next;
  }
  for (let i = 0; i < index; i++) {
    if (!result[i]) {
      result[i] = 0;
    }
  }
  // console.log(stock , result)
  // if(index > result.length){
  //   result.push(0)

  // }
  return result;
};
/**
 * 初稿未做太多代码优化
 * 
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了89.47%的用户
 * 内存消耗：48.3 MB, 在所有 JavaScript 提交中击败了70.18%的用户
 */