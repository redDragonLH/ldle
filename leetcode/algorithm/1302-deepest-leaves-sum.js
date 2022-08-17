/**
 * 1302. 层数最深叶子节点的和
 *
 * 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
 */

/**
 * 递归并记录层级
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root, level = 1, levelCount = []) {
  if (!root) {
    return false;
  }
  !levelCount[level] && (levelCount[level] = 0);
  levelCount[level] += root.val;
  deepestLeavesSum(root.left, level + 1, levelCount);
  deepestLeavesSum(root.right, level + 1, levelCount);
  return levelCount[levelCount.length - 1];
};
/**
 * 执行用时：148 ms, 在所有 JavaScript 提交中击败了86.02%的用户
 * 内存消耗：64.3 MB, 在所有 JavaScript 提交中击败了24.73%的用户
 */