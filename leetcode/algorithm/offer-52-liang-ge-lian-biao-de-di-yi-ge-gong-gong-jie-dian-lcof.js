/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 * 
 * 输入两个链表，找出它们的第一个公共节点。
 */

/**
 * 
 * 使用hash 表保存节点以待判断，简单，暴力
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};

/**
 * 双指针法
 * 
 * 步骤：
 *  1. 创建两个指针pA和pB分别指向两个链表的头结点headA和headB,
 *  2. 每步操作需要同时更新指针 pA和pB
 *  3. 如果指针pA不为空，则将pA移到下一个节点，指针pB同理
 *  4. 如果指针pA为空，则将指针pA移到链表headB 的头结点；如果指针pB为空，则将指针pB移到链表headA的头结点
 *  5. 当指针 pA和pB指向同一个节点或者都为空时，返回它们指向的节点或者null
 * 
 * 证明：
 *  情况一： 两个链表相交
 *      两个链表的长度分别是 m 和 n ，假设链表headA的不相交部分有 a 个节点，链表 headB 的不相交部分有b个节点
 *   两个链表相交的部分有c个节点，，则 a + c = m, b + c = n.
 * 
 *  * 如果 a = b,则两个指针会同时到达两个链表的第一个公共节点，此时返回两个链表的第一个公共节点
 *  * 如果 a ≠ b，则指针 pA会遍历完链表 headA，指针 pB会遍历完链表 headB，两个指针不会同时到达链表的尾节点，
 *      然后指针 pA 移到链表 headB 的头结点，指针 pB 移到链表 headA 的头结点，然后两个指针继续移动，
 *      在指针 pA 移动了 A + c +b 次，指针 pB 移动了 b + c + a 次之后，两个指针会同时到达两个链表的第一个公共节点，
 *      该节点也是两个指针第一次同时指向的节点，此时返回两个链表的第一个公共节点
 */
 var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};