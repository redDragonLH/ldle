/**
 * 430. 扁平化多级双向链表
 *
 * 多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。
 * 这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
 *
 * 给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * 把层级抻平,从头到尾还是从尾到头比较好,先处理子级后出来孙子节点就得多次循环才能搞定,处理孙子节点就得保存很多头尾节点变量,不过可以封在递归函数里
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let node = head;
  deep(node);
  return head;
};
const deep = (node) => {
  let next = node;
  let tail = next;
  while (next) {
    if (next.child) {
      let oldNext = next.next;

      let { childHead, childTail } = deep(next.child);

      next.next = childHead;
      childHead.prev = next;

      childTail && (childTail.next = oldNext);
      oldNext && (oldNext.prev = childTail);
      // 必须清空,省的陷入循环
      next.child = null;
    }
    // tail 和next应该可以合并,但是代码就会麻烦一点,而且判断也会比较坑
    tail = next;
    next = next.next;
  }

  return { childHead: node, childTail: tail };
};

/**
 * 问题:变量使用过多
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了62.81%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了11.57%的用户
 */
