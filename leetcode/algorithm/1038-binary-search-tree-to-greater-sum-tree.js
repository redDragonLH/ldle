/**
 * 1038. 从二叉搜索树到更大和树
 *
 * 给定一个二叉搜索树 root (BST)，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
 * 提醒一下， 二叉搜索树 满足下列约束条件：
 *  * 节点的左子树仅包含键 小于 节点键的节点。
 *  * 节点的右子树仅包含键 大于 节点键的节点。
 *  * 左右子树也必须是二叉搜索树。
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let s = 0;
  function dfs(node) {
    if (node === null) {
      return;
    }
    dfs(node.right); // 递归右子树
    s += node.val; // left 比当前元素小,不能加进去
    node.val = s; // 此时 s 就是 >= node.val 的所有数之和
    dfs(node.left); // 递归左子树
  }
  dfs(root);
  return root;
};
