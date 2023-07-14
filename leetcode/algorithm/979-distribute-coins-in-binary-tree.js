/**
 * 979. 在二叉树中分配硬币
 *
 * 给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。
 *
 * 在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。
 *
 * 返回使每个结点上只有一枚硬币所需的移动次数。
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
 * 思路较为隐晦,其实主要是找到哪里多,哪里少,然后步数是一定的,因为val确定了,所以找到差值的距离就好
 * 
 * 比较想不清的是怎么计算有到无的具体步数
 * @param {TreeNode} root
 * @return {number}
 */
let move;

var distributeCoins = function (root) {
  move = 0;
  dfs(root);
  return move;
};
// 深度优先
function dfs(root) {
  let moveleft = 0;
  let moveright = 0;
  // 超出叶子结点处理
  if (root === null) {
    return 0;
  }
  // 中间节点处理
  if (root.left !== null) {
    moveleft = dfs(root.left);
  }
  if (root.right !== null) {
    moveright = dfs(root.right);
  }
  // 叶子结点处理
  // 左右子树的需要移动的步骤
  // 正负都算是因为不管是移入移出都算步骤
  move += Math.abs(moveleft) + Math.abs(moveright);
  //计算 两棵子树总共需要移动的步骤,正负都算到一起,
  // 如果为零那么说明左右子树内部是有的和缺少的是相等的
  // 为负说明少,为正说明多
  // -1 是因为节点自己应该有一个
  return moveleft + moveright + root.val - 1;
}
/**
 * 对哦,不需要从多到少的步骤,只要一层一层往上走,多了少了都是步骤就好了,只需要处理一层最多两层之间的差距
 */
