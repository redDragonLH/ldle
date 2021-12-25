/**
 * 1609. 奇偶树
 * 
 * 如果一棵二叉树满足下述几个条件，则可以称为 奇偶树 ：
 *  * 二叉树根节点所在层下标为 0 ，根的子节点所在层下标为 1 ，根的孙节点所在层下标为 2 ，依此类推。
 *  * 偶数下标 层上的所有节点的值都是 奇 整数，从左到右按顺序 严格递增
 *  * 奇数下标 层上的所有节点的值都是 偶 整数，从左到右按顺序 严格递减
 * 
 * 给你二叉树的根节点，如果二叉树为 奇偶树 ，则返回 true ，否则返回 false 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 广度优先
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let parity = 1;
    let array = [root];
    while (array.length) {
        let len = array.length;
        // 第一个prev是没有数据的，所以必须给默认值
        let prev = parity === 1 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;

        while (len--) {
            let node = array.shift()
            node.left && array.push(node.left);
            node.right && array.push(node.right);
            // 数值奇偶判断
            if (node.val % 2 !== parity) return false;
            // 当层单调顺序判断
            if ((parity === 1 && prev >= node.val) || (parity === 0 && prev <= node.val)) {
                return false;
            }
            // 前一个数据
            prev = node.val;
        }
        // 2进制
        parity = (parity + 1) % 2;
    }
    return true;
};
/**
 * 执行用时：236 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 * 内存消耗：74.8 MB, 在所有 JavaScript 提交中击败了56.67%的用户
 */