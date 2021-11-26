/**
 * 700. 二叉搜索树中的搜索
 *
 * 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
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
 * 二叉搜索树性质:
 *  1. 若任意结点的左子树不空,则左子树上所有结点的值均不大于它的根节点的值,
 *  2. 若任意结点的右子树不空,则右子树上所有结点的值均不小于它的根节点的值
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  else if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了62.48%的用户
 * 内存消耗：44 MB, 在所有 JavaScript 提交中击败了89.29%的用户
 */
