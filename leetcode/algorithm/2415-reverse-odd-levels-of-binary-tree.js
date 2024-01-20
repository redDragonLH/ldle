/**
 * 2415. 反转二叉树的奇数层
 *
 * 给你一棵 完美 二叉树的根节点 root ，请你反转这棵树中每个 奇数 层的节点值。
 *  * 例如，假设第 3 层的节点值是 [2,1,3,4,7,11,29,18] ，那么反转后它应该变成 [18,29,11,7,4,3,1,2] 。
 * 反转后，返回树的根节点。
 * 完美 二叉树需满足：二叉树的所有父节点都有两个子节点，且所有叶子节点都在同一层。
 * 节点的 层数 等于该节点到根节点之间的边数。
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
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  let arr = [root];
  let tier = -1;
  while (arr.length) {
    let len = arr.length;
    let tierData = [];
    tier = (tier + 1) % 2;
    for (let i = 0; i < len; i++) {
      let data = arr.shift();
      if (tier) {
        tierData.push(data);
      }
      if (data.left) {
        arr.push(data.left, data.right);
      }
    }
    tierData.length && exchangeVal(tierData);
  }
  return root;
};
let exchangeVal = (tierData) => {
  let left = 0,
    right = tierData.length - 1;
  while (left < right) {
    let leftVal = tierData[left].val;
    tierData[left].val = tierData[right].val;
    tierData[right].val = leftVal;
    left++;
    right--;
  }
};
/**
 * 执行用时：204 ms, 在所有 JavaScript 提交中击败了86.67%的用户
 * 内存消耗：67.88 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */