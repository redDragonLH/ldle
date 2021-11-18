/**
 * 563. 二叉树的坡度
 *
 * 给定一个二叉树，计算 整个树 的坡度 。
 * 一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。
 * 整个树 的坡度就是其所有节点的坡度之和。
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
var findTilt = function (root) {
  let ans = 0;
    // 递归解决
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    // 从最低加到最高,代码好理解,运行模型不太好想象
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);
    ans += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };

  dfs(root);
  return ans;
};
