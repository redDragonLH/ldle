/**
 * 513. 找树左下角的值
 *
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 * 假设二叉树中至少有一个节点。
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
 * 广度优先遍历可以找到左下角的节点,但是要在遍历时分辨层级
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let sequence = [[root]];
  while (sequence.length) {
    let items = sequence.shift();
    let box = [];
    let len_items = items.length;
    let i = 0;
    while (i < len_items) {
      items[i].left && box.push(items[i].left);
      items[i].right && box.push(items[i].right);
      i++;
    }
    if (!box.length) {
      return items[0].val;
    }
    sequence.push(box);
  }
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了55.78%的用户
 * 内存消耗：45.6 MB, 在所有 JavaScript 提交中击败了20.54%的用户
 */

/**
 * 官方广度优先搜索
 */
var findBottomLeftValue = function (root) {
  let ret = 0;
  const queue = [root];
  while (queue.length) {
    const p = queue.shift();
    if (p.right) {
      queue.push(p.right);
    }
    if (p.left) {
      queue.push(p.left);
    }
    // 不会被上一个左侧元素覆盖么
    // 好像是从右往左遍历,这个思路很巧妙
    ret = p.val;
  }
  return ret;
};
