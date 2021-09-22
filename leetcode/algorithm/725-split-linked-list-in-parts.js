/**
 * 725. 分隔链表
 *
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
 *
 * 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
 *
 * 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
 *
 * 返回一个由上述 k 部分组成的数组。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 这就没啥算法了,先把链表拆分,然后按照比例插入数组中
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let linkArr = [];
    let result = new Array(k)
    let node = head;
    while(node){
        let next = node.next
        node.next = null;
        linkArr.push(node)
        node = next
    }
    console.log(linkArr);
    //  链表元素小于等于k
    if(linkArr.length<=k){
    }else{
        // 链表元素大k,又是另一种处理
    }
};
