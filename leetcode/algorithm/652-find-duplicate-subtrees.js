/**
 * 652. 寻找重复的子树
 *
 * 给定一棵二叉树 root，返回所有重复的子树。
 *
 * 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 *
 * 如果两棵树具有相同的结构和相同的结点值，则它们是重复的。
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
 * 保存当前元素数据被，但是有重复风险
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let nodeObj = {}; //值是数组
};
var deep = (root, mapping) => {
  if (!root) return false;
  if (mapping[root.val]) {
    mapping[root.val].push(root);
  } else {
    mapping[root.val] = [root];
  }
  deep(root.left, mapping);
  deep(root.right, mapping);
};
var deepCompare = (mappingNode,target)=>{

}