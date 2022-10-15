/**
 * 817. 链表组件
 *
 * 给定链表头结点 head，该链表上的每个结点都有一个 唯一的整型值 。同时给定列表 nums，该列表是上述链表中整型值的一个子集。
 *
 * 返回列表 nums 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 nums 中）构成的集合。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 判断值是否存在,判断是否连续,这个连续是要nums也是连续的么,nums可以不连续
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let node = head;
  let result = 0;
  let count = 0;
  while (node) {
    // 存在则累加
    if (nums.indexOf(node.val) > -1) {
      count++;
    } else {
        //断掉则赋值
      if (count) {
        result++;
      }
      count = 0;
    }
    // 最后要检查最后数据是否处理
    node = node.next;
  }
  if (count) result++;

  return result;
};
