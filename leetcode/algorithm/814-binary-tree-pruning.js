/**
 * 814. 二叉树剪枝
 * 给你二叉树的根结点 root ，此外树的每个结点的值要么是 0 ，要么是 1 。
 *
 * 返回移除了所有不包含 1 的子树的原二叉树。
 * 节点 node 的子树为 node 本身加上所有 node 的后代。
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
 * 怎样才能自上而下的遍历中获取是否不含有1
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  // 叶子结点 是0返回null;
  // 这样可以构建非叶子结点么
  // 也还好,因为是递归到叶子结点才开始处理,递归是从上往下,但是处理是从下往上(递归的灵活使用)
  // 
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  return root;
};
