/**
 * 671. 二叉树中第二小的节点
 *
 * 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。
 *
 * 更正式地说，root.val = min(root.left.val, root.right.val) 总成立。
 *
 * 给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
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
 * 
 * 数据是乱的,还以为是有一定排序的
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let result = -1;
  let node = root;
  while (node) {
    let temp = {};
    if (node.right && node.left) {
      temp = node.right.val > node.left.val ? node.right : node.left;
    } else {
      return result;
    }
    if (temp.val > node.val) {
      return temp.val;
    } else {
      node = temp;
    }
  }
  return result;
};
