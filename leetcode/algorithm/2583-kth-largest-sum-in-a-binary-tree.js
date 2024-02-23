/**
 * 2583. 二叉树中的第 K 大层和
 *
 * 给你一棵二叉树的根节点 root 和一个正整数 k 。
 * 树中的 层和 是指 同一层 上节点值的总和。
 * 返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。
 * 注意，如果两个节点与根节点的距离相同，则认为它们在同一层。
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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  // 层序遍历
  let counts = [];
  let items = [root];
  while (items.length) {
    let len = items.length;
    let count = 0;
    while (len--) {
      let item = items.shift();
      count += item.val;
      if (item.left) {
        items.push(item.left);
      }
      if (item.right) {
        items.push(item.right);
      }
    }
    counts.push(count);
  }
  if (counts.length < k) return -1;
  return counts.sort((a, b) => b - a)[k - 1];
};
/**
 * 执行用时：631 ms, 在所有 JavaScript 提交中击败了20.00%的用户
 * 内存消耗：92.57 MB, 在所有 JavaScript 提交中击败了40.00%的用户
 */