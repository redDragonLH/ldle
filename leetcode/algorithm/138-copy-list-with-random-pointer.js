/**
 * 138. 复制带随机指针的链表
 *
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 *
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 *
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。
 *
 * 返回复制链表的头节点。
 *
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 *  * val：一个表示 Node.val 的整数。
 *  * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 *
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 复制链表简单,复杂的是处理随机指针,有指向前的,后的中间的,无法在一次循环里面处理完毕
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  let newLink = new Node(-1);
  let next = newLink;
  let oldNext = head;
  while (oldNext) {
    next.next = new Node(oldNext.val);
    map.set(oldNext, next.next);
    next = next.next;
    oldNext = oldNext.next;
  }

  next = newLink.next;
  oldNext = head;
  while (oldNext) {
    next.random = oldNext.random ? map.get(oldNext.random) : null;
    next = next.next;
    oldNext = oldNext.next;
  }
  return newLink.next;
};

/**
 * 还可以优化,把两个轮训合并为一个,如果random 元素未定义则 new 并报错在map,新建时先检查是否有,但是链表元素都一样的话就有点问题~~~
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了86.34%的用户
 * 内存消耗：39.3 MB, 在所有 JavaScript 提交中击败了44.39%的用户
 */

/**
 * 官方题解 回溯 + 哈希
 * @param {*} head
 * @param {*} cachedNode
 * @returns
 */
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  //  不存在map内
  if (!cachedNode.has(head)) {
    // 放入数据
    cachedNode.set(head, { val: head.val }),
      Object.assign(cachedNode.get(head), {
        next: copyRandomList(head.next, cachedNode),
        random: copyRandomList(head.random, cachedNode),
      });
  }
  return cachedNode.get(head);
};
