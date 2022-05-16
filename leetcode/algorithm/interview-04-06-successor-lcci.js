/**
 * 面试题 04.06. 后继者
 * 
 * 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。
 * 如果指定节点没有对应的“下一个”节点，则返回null。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 中序后继
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    const stack = [];
    let prev = null, curr = root;
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            // 遍历左节点
            curr = curr.left;
        }
        curr = stack.pop();
        if (prev === p) {
            return curr;
        }
        prev = curr;
        curr = curr.right;
    }
    return null;
};