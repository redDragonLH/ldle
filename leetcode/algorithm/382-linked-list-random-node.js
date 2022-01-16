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

/**
 * 试试直观写法，获取len，然后随机，查找返回
 * @param {ListNode} head
 */
 var Solution = function (head) {
     this.head = head;
    this.len = 0
    let node = head;
    while (node) {
        this.len++
        node = node.next
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * this.len)
    let node = this.head
    while(random--){
        node= node.next;
    }
    return node.val
};
/**
 * 速度没变，内存少了不少~~~
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了63.33%的用户
 * 内存消耗：44.1 MB, 在所有 JavaScript 提交中击败了78.89%的用户
 */

/**
 * 第三方题解： 蓄水池抽样算法
 * 
 * 大数据流中的随机抽样问题,即：当内存无法加载全部数据时，如何从包含未知大小的数据流中随机选取K个数据，并且保证每个数据被抽到的概率相等
 * 
 * 此题中：假设数据流含有N个数，我们知道如果要保证所有的数被抽到的概率相等，那么每个数抽到的概率应该为 1/N
 * 
 * 思路：遍历数据，当遇到第 i 个数时，以1/i的概率保留它，(i-1)/i的概率保留原来的数
 */