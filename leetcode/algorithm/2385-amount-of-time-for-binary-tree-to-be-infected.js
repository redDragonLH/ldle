/**
 * 2385. 感染二叉树需要的总时间
 *
 * 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。
 * 每分钟，如果节点满足以下全部条件，就会被感染：
 *  * 节点此前还没有感染。
 *  * 节点与一个已感染节点相邻。
 * 返回感染整棵树需要的分钟数。
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
 * 求的是start 节点到根结点以及根结点到另一个子树的最远叶子结点的距离与 start 节点到当前子树最远节点的距离哪个大
 *  但是这个算法要的变量好多,还要判断节点在哪棵子树上
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    console.log(getDeep(root));
};

const getDeep = (root, deep = 0) => {
  if (!root) {
    return deep;
  }
  let left = getDeep(root.left, deep + 1),right = getDeep(root.right, deep + 1)
  return [Math.max(...left), Math.max(...right)];
};

const getStartPosition = (root, start)=>{

}
/**
 * 这个逻辑有点复杂
 */