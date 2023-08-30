/**
 * 1448. 统计二叉树中好节点的数目
 *
 * 给你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。
 *
 * 「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。
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
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    return deep(root,-100000)
};
const deep = (root, max) => {
  if (!root) return 0;
  let val = 0;
  if (root.val >= max) {
    
    max = root.val;
    val = 1;
  }
  return val + deep(root.left, max) + deep(root.right, max);
};

