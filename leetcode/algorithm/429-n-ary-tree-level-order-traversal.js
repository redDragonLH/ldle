/**
 * 429. N 叉树的层序遍历
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 * 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 按层遍历
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let index = -1;
  let nodes = [root];
  while (nodes.length) {
    let len = nodes.length;
    result.push([]);
    index++;
    while (len--) {
      let node = nodes.shift();
      result[index].push(node.val);
      node.children.forEach((e) => {
        nodes.push(e);
      });
    }
  }
  return result;
};

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了64.68%的用户
 * 内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了21.81%的用户
 */