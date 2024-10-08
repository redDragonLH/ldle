/**
 * 1261. 在受污染的二叉树中查找元素
 *
 * 给出一个满足下述规则的二叉树：
 * 1. root.val == 0
 * 2. 如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
 * 3. 如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
 * 现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。
 * 请你先还原二叉树，然后实现 FindElements 类：
 *  * FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
 *  * bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。
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
 * @param {TreeNode} root
 */
var FindElements = function (root) {
  this.root = root;
  this.mapping = new Set([0]);

  root.val = 0;
  let arr = [root];
  while (arr.length) {
    let len = arr.length;
    while (len--) {
      let item = arr.shift();
      if (item.left) {
        item.left.val = item.val * 2 + 1;
        arr.push(item.left);
        this.mapping.add(item.left.val);
      }
      if (item.right) {
        item.right.val = item.val * 2 + 2;
        arr.push(item.right);
        this.mapping.add(item.right.val);
      }
    }
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.mapping.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
/**
 * 执行用时 :111 ms, 在所有 JavaScript 提交中击败了91.43%的用户
 * 内存消耗 :63.11 MB, 在所有 JavaScript 提交中击败了5.72%的用户
 */