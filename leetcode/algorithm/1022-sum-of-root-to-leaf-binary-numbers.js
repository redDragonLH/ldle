/**
 * 1022. 从根到叶的二进制数之和
 *
 * 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。
 *  * 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
 *
 * 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
 * 返回这些数字之和。题目数据保证答案是一个 32 位 整数。
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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let resultArr = [];
  deep(root, "", resultArr);
  return resultArr.reduce((curr, prev) => curr + parseInt(prev, 2), 0);
};
const deep = (root, binary, result) => {
  if (!root.left && !root.right) return result.push(binary + root.val);

  root.left && deep(root.left, binary + root.val, result);
  root.right && deep(root.right, binary + root.val, result);
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了80.84%的用户
 * 内存消耗：43.1 MB, 在所有 JavaScript 提交中击败了83.83%的用户
 */
