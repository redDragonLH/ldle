/**
 * 1145. 二叉树着色游戏
 *
 * 有两位极客玩家参与了一场「二叉树着色」的游戏。游戏中，给出二叉树的根节点 root，树上总共有 n 个节点，且 n 为奇数，其中每个节点上的值从 1 到 n 各不相同。
 *
 * 最开始时：
 *  * 「一号」玩家从 [1, n] 中取一个值 x（1 <= x <= n）；
 *  * 「二号」玩家也从 [1, n] 中取一个值 y（1 <= y <= n）且 y != x。
 *
 * 「一号」玩家给值为 x 的节点染上红色，而「二号」玩家给值为 y 的节点染上蓝色。
 *
 * 之后两位玩家轮流进行操作，「一号」玩家先手。每一回合，玩家选择一个被他染过色的节点，将所选节点一个 未着色 的邻节点（即左右子节点、或父节点）进行染色（「一号」玩家染红色，「二号」玩家染蓝色）。
 *
 * 如果（且仅在此种情况下）当前玩家无法找到这样的节点来染色时，其回合就会被跳过。
 *
 * 若两个玩家都没有可以染色的节点时，游戏结束。着色节点最多的那位玩家获得胜利 ✌️。
 *
 * 现在，假设你是「二号」玩家，根据所给出的输入，假如存在一个 y 值可以确保你赢得这场游戏，则返回 true ；若无法获胜，就请返回 false 。
 *
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
 * 根据题目和题解,当给定先手元素时,必须堵上左子树右子树,其他三个部分其中之一,这样就可以防止一号占领,那么这三部分之一如果大于一半那么二号玩家就可以获胜
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  let xNode;
  // 找x的元素
  const find = (node, x) => {
    if (xNode || !node) {
      return;
    }
    if (node.val === x) {
      xNode = node;
      return;
    }
    find(node.left, x);
    find(node.right, x);
  };

  const getSubtreeSize = (node) => {
    if (!node) {
      return 0;
    }
    return 1 + getSubtreeSize(node.left) + getSubtreeSize(node.right);
  };
  find(root, x);
  // 只要有一个部分大于一半直接返回
  const leftSize = getSubtreeSize(xNode.left);
  if (leftSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  const rightSize = getSubtreeSize(xNode.right);
  if (rightSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  // 这思路就很清晰,查不好查,但是又不是不知道总数!
  const remain = n - 1 - leftSize - rightSize;
  return remain >= Math.floor((n + 1) / 2);
};
