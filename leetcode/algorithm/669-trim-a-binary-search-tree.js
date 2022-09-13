/**
 * 669. 修剪二叉搜索树
 *
 * 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
 *
 * 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
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
 * 二叉搜索树的性质：
 *  1.  左子树下的每个后代节点的值都小于节点n的值
 *  2.  右子树下的每个后代节点的值都大于节点n的值
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;
  if (root.val < low) {
    return trimBST(root.right, low, high);
  } else if (root.val > high) {
    return trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
  }
};
/**
 * 根据二叉搜索树的性质进行判断直接舍弃左或右子树就可以
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了45.51%的用户
 * 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了27.54%的用户
 */