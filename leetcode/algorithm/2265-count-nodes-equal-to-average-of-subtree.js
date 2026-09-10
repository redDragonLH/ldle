/**
 * 2265. 统计值等于子树平均值的节点数
 *
 * 给你一棵二叉树的根节点 root ，找出并返回满足要求的节点数，要求节点的值等于其 子树 中值的 平均值 。
 * 注意：
 *  * n 个元素的平均值可以由 n 个元素 求和 然后再除以 n ，并 向下舍入 到最近的整数。
 *  * root 的 子树 由 root 和它的所有后代组成。
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
 * 叶子节点肯定是满足要求的节点, 因为它的子树只有它自己，平均值就是它的值。中间节点需要计算其子树的平均值。使用前缀和可以优化计算。
 * 深度优先也可以~~
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let count = 0;
  const dfs = (node) => {
    if (!node) return [0, 0]; // [sum, size]
    const [leftSum, leftSize] = dfs(node.left);
    const [rightSum, rightSize] = dfs(node.right);
    const sum = leftSum + rightSum + node.val;
    const size = leftSize + rightSize + 1;
    if (Math.floor(sum / size) === node.val) count++;
    return [sum, size];
  };
  dfs(root);
  return count;
};
/**
 * 执行用时：51 ms, 在所有 JavaScript 提交中击败了87.50%的用户
 * 内存消耗：60.63 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */