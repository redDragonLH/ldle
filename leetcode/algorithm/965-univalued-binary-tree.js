/**
 * 965. 单值二叉树
 *
 * 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
 * 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
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
 * 遍历判断,轮训都忘了咋写了
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let container = [root];
  while (container.length) {
    let len = container.length;
    while (len--) {
      let node = container.shift();
      if (node.left) {
        if (node.left.val !== node.val) return false;
        container.push(node.left);
      }
      if (node.right) {
        if (node.right.val !== node.val) return false;
        container.push(node.right);
      }
    }
  }
  return true;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了8.96%的用户
 * 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了40.09%的用户
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
 * 第三方题解
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isUnivalTree = function (root) {
     // 标志值抽出来,不再用 root.val
    const value = root.val
    let queue = []
    queue.push(root)
    while (queue.length) {
        const node = queue.shift()
        if (node.val != value) {
            return false
        }
        node.left ? queue.push(node.left) : ""
        node.right ? queue.push(node.right) : ""
    }
    return true
};