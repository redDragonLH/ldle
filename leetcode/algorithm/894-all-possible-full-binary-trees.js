/**
 * 894. 所有可能的真二叉树
 *
 * 给你一个整数 n ，请你找出所有可能含 n 个节点的 真二叉树 ，并以列表形式返回。答案中每棵树的每个节点都必须符合 Node.val == 0 。
 * 答案的每个元素都是一棵真二叉树的根节点。你可以按 任意顺序 返回最终的真二叉树列表。
 * 真二叉树 是一类二叉树，树中每个节点恰好有 0 或 2 个子节点。
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
 * 真二叉树 是指每个节点的子节点数不是0就是2
 *
 * 而如此可见.真二叉树元素必定是奇数
 *
 * 官方题解
 * 还以为是给个数呢,只是给一个真二叉树就够了
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  let fullBinaryTrees = [];
  // 偶数就不用想了
  if (n % 2 === 0) {
    return fullBinaryTrees;
  }
  // 特殊情况
  if (n === 1) {
    fullBinaryTrees.push(new TreeNode(0));
    return fullBinaryTrees;
  }
  /**
   * 确实有点看不懂
   * 不过能知道是构建左右子树的
   * 深度遍历优先
   * 然后从下到上一层层构建
   */
  for (let i = 1; i < n; i += 2) {
    let leftSubtrees = allPossibleFBT(i);
    let rightSubtrees = allPossibleFBT(n - 1 - i);
    for (let leftSubtree of leftSubtrees) {
      for (let rightSubtree of rightSubtrees) {
        let root = new TreeNode(0, leftSubtree, rightSubtree);
        fullBinaryTrees.push(root);
      }
    }
  }
  return fullBinaryTrees;
};
