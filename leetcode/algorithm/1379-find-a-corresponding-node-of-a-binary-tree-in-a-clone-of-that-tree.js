/**
 * 1379. 找出克隆二叉树中的相同节点
 *
 * 给你两棵二叉树，原始树 original 和克隆树 cloned，以及一个位于原始树 original 中的目标节点 target。
 * 其中，克隆树 cloned 是原始树 original 的一个 副本 。
 * 请找出在树 cloned 中，与 target 相同 的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。
 * 注意：你 不能 对两棵二叉树，以及 target 节点进行更改。只能 返回对克隆树 cloned 中已有的节点的引用。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function (original, cloned, target) {
  return deep(cloned, target);
};
let deep = (trees, target) => {
  if (trees.val === target.val) return trees;
  let data;
  if (trees.left) {
    data = deep(trees.left, target);
    if (data) return data;
  }
  if (trees.right) {
    data = deep(trees.right, target);
    if (data) return data;
  }
};
/**
 *  边界条件太多了啊
 * 
 * 执行用时：234 ms, 在所有 JavaScript 提交中击败了72.09%的用户
 * 内存消耗：71.14 MB, 在所有 JavaScript 提交中击败了9.30%的用户
 */