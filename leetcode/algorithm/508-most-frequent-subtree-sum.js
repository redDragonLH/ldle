/**
 * 508. 出现次数最多的子树元素和
 *
 * 给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。
 *
 * 一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。
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
 * 看了题解才知道题目啥意思
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const cnt = new Map();
  let maxCnt = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    // 这里拦住进入下一层节点
    const sum = node.val + dfs(node.left) + dfs(node.right);
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
    // 顺便算出最大值
    maxCnt = Math.max(maxCnt, cnt.get(sum));
    return sum;
  };

  dfs(root);
  const list = [];
  for (const [s, c] of cnt.entries()) {
    if (c === maxCnt) {
      list.push(s);
    }
  }
  return list
  // 为啥要转一层，理论上不是一样的么
  const ans = new Array(list.length);
  for (let i = 0; i < list.length; ++i) {
    ans[i] = list[i];
  }
  return ans;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了96.59%的用户
 * 内存消耗：47 MB, 在所有 JavaScript 提交中击败了53.41%的用户
 */