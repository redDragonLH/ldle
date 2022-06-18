/**
 * 剑指 Offer II 029. 排序的循环链表
 *
 * 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。
 *
 * 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。
 *
 * 如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。
 *
 * 如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。
 */

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  let newNode = new Node(insertVal, null);
  let node = head;
  let maxNode = head;
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
  // 那得判断是不是全是一个数据，陷入死循环
  // 还得搞快慢针,快慢针也无法解决
  let first =head;
  while (head.val === head.next.val) {
    head = head.next;
    first = head.next.next.next;
    if (head === first) {
        let next = head.next;
        head.next = newNode;
        newNode.next = next;
        return head;
    }
  }

  while (true) {
    maxNode = node.val > maxNode.val ? node : maxNode;
    if (
      (node.val < insertVal || node.val === insertVal) &&
      node.next.val > insertVal
    ) {
      let next = node.next;
      node.next = newNode;
      newNode.next = next;
      return head;
    }
    node = node.next;
    if (node.val === head.val) {
      let next = maxNode.next;
      maxNode.next = newNode;
      newNode.next = next;
      return head;
    }
  }
};

/**
 *官方题解
 */
var insert = function (head, insertVal) {
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }
  // 这里为什么直接赋值返回
  // 对象的全等判断，判断的是内存位置，好久没有用过，都忘了
  if (head.next === head) {
    head.next = node;
    node.next = head;
    return head;
  }
  let curr = head,
    next = head.next;
  while (next !== head) {
    if (insertVal >= curr.val && insertVal <= next.val) {
      break;
    }
    if (curr.val > next.val) {
      if (insertVal > curr.val || insertVal < next.val) {
        break;
      }
    }
    curr = curr.next;
    next = next.next;
  }
  curr.next = node;
  node.next = next;
  return head;
};
