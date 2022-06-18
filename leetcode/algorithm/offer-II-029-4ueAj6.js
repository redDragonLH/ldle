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
  let maxNode = head
  if(!head){
    newNode.next = newNode;
    return newNode;
  }
  // 那得判断是不是全是一个数据，陷入死循环
  // 还得搞快慢针,快慢针也无法解决
  let slow = 0;
  let first = 0
  while(head.val === head.next.val){
    head =  head.next
    slow++
    first+=2;
    if(first > slow*2){

    }
  }

  while (true) {
      maxNode = node.val>maxNode.val?node: maxNode
    if ((node.val < insertVal|| node.val === insertVal) && node.next.val > insertVal) {
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
