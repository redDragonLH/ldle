/**
 * 230. 二叉搜索树中第K小的元素
 * 
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
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
 * 二叉搜索树性值：
 *  * 节点的左子树只包含小于当前节点的数
 *  * 节点的右子树只包含大于当前节点的数
 *  * 所有的左子树和右子树自身也必须是二叉搜索树
 * 
 * 因为二叉搜索树和中序遍历的性值，所以二叉搜索树的中序遍历是按照键增加的顺序进行的
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const stack = [];
    while (root != null || stack.length) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        --k;
        if (k === 0) {
            break;
        }
        root = root.right;
    }
    return root.val;
};