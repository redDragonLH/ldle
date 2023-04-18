/**
 * 1026. 节点与其祖先之间的最大差值
 *
 * 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。
 *（如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）
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
 * 深度优先递归?但是得保存一堆父级
 *  
 * 不必保留一堆,只需要获取最大和最小的节点就可以了
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  return dfs(root, root.val, root.val);
};

function dfs(root, mi, ma) {
  if (root === null) {
    return 0;
  }
  var diff = Math.max(Math.abs(root.val - mi), Math.abs(root.val - ma));
  mi = Math.min(mi, root.val);
  ma = Math.max(ma, root.val);
  diff = Math.max(diff, dfs(root.left, mi, ma));
  diff = Math.max(diff, dfs(root.right, mi, ma));
  return diff;
}
