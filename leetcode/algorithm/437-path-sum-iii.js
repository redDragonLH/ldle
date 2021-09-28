/**
 * 437. 路径总和 III
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 *
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
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
 * 深度优先遍历,对数据进行处理,但是在这个过程中如何计算此条链上的所有值就是个问题,前缀和吗,那就得二层循环,不用前缀和就是无数次循环~
 * 随着遍历会增减链表的元素,前缀和也要进行同步处理
 *
 * 深度优先就得用递归或类似逻辑,用递归对前缀和数据不太友好啊~~~用循环模拟递归,模拟好像挺有难度~~~
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let prefixSum = [0];
};

/**
 * 官方题解 递归+前缀和
 */
var pathSum = function (root, targetSum) {
    // 使用map 保存前缀和数据,没有顺序的情况下怎么保证切换链表时不被已处理分支的前缀和干扰
    // 我对前缀和的理解有问题吗,还是对二叉树的理解有问题
  const prefix = new Map();
  prefix.set(0, 1);
  return dfs(root, prefix, 0, targetSum);
};

const dfs = (root, prefix, curr, targetSum) => {
  if (root == null) {
    return 0;
  }

  let ret = 0;
  curr += root.val;

  ret = prefix.get(curr - targetSum) || 0;
  // 这个前缀和和普通前缀和不一样,
  // 去掉了顺序的概念,转而使用数量,在递归一层获取当前前缀,检查map内同一数字的量,并加一(因为在处理完左右字数会把此层前缀和去掉,所以就算map内当前前缀和不是为0也没问题,因为肯定是上一层的数据,也在同一条链表上)
  prefix.set(curr, (prefix.get(curr) || 0) + 1);
  ret += dfs(root.left, prefix, curr, targetSum);
  ret += dfs(root.right, prefix, curr, targetSum);
  prefix.set(curr, (prefix.get(curr) || 0) - 1);

  return ret;
};
