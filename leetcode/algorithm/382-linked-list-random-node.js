/**
 * 382. 链表随机节点
 * 给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。
 * 
 * 实现 Solution 类：
 *  * Solution(ListNode head) 使用整数数组初始化对象。
 *  * int getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 比较二的方案是转为数组，然后随机，问题就是内存估计得爆,果然内存限制
 * 代码写错了。还以为是内存限制了
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.arr = []
    this.len = 0
    let node = head;
    while (node) {
        this.arr.push(node.val)
        node = node.next
    }
    this.len = this.arr.length;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * this.len)
    return this.arr[random]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

/**
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了63.33%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */