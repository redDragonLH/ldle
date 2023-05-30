/**
 * 1110. 删点成林
 *
 * 给出二叉树的根节点 root，树上每个节点都有一个不同的值。
 *
 * 如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。
 *
 * 返回森林中的每棵树。你可以按任意顺序组织答案。
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
 * 深度优先,或是递归,
 * 
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let result = [];
  deep(root, to_delete, result, null);
  return result;
};
let deep = (root, to_delete, result, prev) => {
  if (!prev) result.push(root);

  if (to_delete.findIndex((e) => e === root.val) > -1) {
    if (!prev) {
      result.pop();
    }
    prev?.left && prev.left.val === root.val && (prev.left = null);
    prev?.right && prev.right.val === root.val && (prev.right = null);
    if (root.left) {
      deep(root.left, to_delete, result, null);
    }
    if (root.right) {
      deep(root.right, to_delete, result, null);
    }
  } else {
    if (root.left) {
      deep(root.left, to_delete, result, root);
    }
    if (root.right) {
      deep(root.right, to_delete, result, root);
    }
  }
};
/**
 * 递,没有归
 * 
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了61.54%的用户
 * 内存消耗：48.8 MB, 在所有 JavaScript 提交中击败了46.15%的用户
 */
