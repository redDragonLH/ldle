/**
 * 606. 根据二叉树创建字符串
 * 
 * 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。
 * 
 * 空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。
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
 * 递归函数前后加括号
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
    if (!root) {
        return "";
    }
    if (!root.left && !root.right) {
        return '' + root.val;
    }
    if (!root.right) {
        return root.val + '(' + tree2str(root.left) + ')';
    }
    return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
};