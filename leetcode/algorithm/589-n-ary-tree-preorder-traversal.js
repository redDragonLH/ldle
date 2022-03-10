/**
 * 589. N 叉树的前序遍历
 *
 * 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。
 *
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 *
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 前序遍历: 根->左->右
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = [];
  deep(root, result);
  return result;
};
const deep = (root, arr = []) => {
  if (!root) return false;
  arr.push(root.val);
  root.children &&
    root.children.forEach((e) => {
      deep(e, arr);
    });
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了89.90%的用户
 * 内存消耗：47.6 MB, 在所有 JavaScript 提交中击败了9.40%的用户
 */