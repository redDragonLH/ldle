/**
 * 1161. 最大层内元素和
 *
 * 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。
 *
 * 请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。
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
 * 层级遍历就好了吧
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const sum = [];
  const dfs = (node, level) => {
    if (level === sum.length) {
      sum.push(node.val);
    } else {
      sum.splice(level, 1, sum[level] + node.val);
    }
    if (node.left) {
      dfs(node.left, level + 1);
    }
    if (node.right) {
      dfs(node.right, level + 1);
    }
  };
  dfs(root, 0);
  let ans = 0;
  for (let i = 0; i < sum.length; ++i) {
    if (sum[i] > sum[ans]) {
      ans = i;
    }
  }
  return ans + 1; // 层号从 1 开始
};
