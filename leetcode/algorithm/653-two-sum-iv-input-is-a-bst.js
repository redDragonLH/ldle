/**
 * 653. 两数之和 IV - 输入 BST
 * 
 * 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.left = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let prefix = new Set();
    return deep(root, k, prefix)
};
const deep = (root, k, prefix) => {
    if (root) {
        if (prefix.has(k - root.val)) {
            return true
        } else {
            prefix.add(root.val)
        }
        return deep(root.left, k, prefix) || deep(root.right, k, prefix)

    } else {
        return false
    }
}