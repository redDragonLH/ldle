/**
 * 515. 在每个树行中找最大值
 *
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
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
 * 广度优先搜索
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [root];

  // 每次循环就是一层
  while (queue.length) {
    let len = queue.length;
    let maxVal = -Number.MAX_VALUE;
    // 循环完之后一层处理完毕
    while (len > 0) {
      len--;
      const t = queue.shift();
      maxVal = Math.max(maxVal, t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    }
    res.push(maxVal);
  }
  return res;
};