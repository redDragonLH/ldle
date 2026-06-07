/**
 * 2196. 根据描述创建二叉树
 *
 * 给你一个二维整数数组 descriptions ，其中 descriptions[i] = [parenti, childi, isLefti] 表示 parenti 是 childi 在 二叉树 中的 父节点，二叉树中各节点的值 互不相同 。此外：
 *  * 如果 isLefti == 1 ，那么 childi 就是 parenti 的左子节点。
 *  * 如果 isLefti == 0 ，那么 childi 就是 parenti 的右子节点。
 * 请你根据 descriptions 的描述来构造二叉树并返回其 根节点 。
 * 测试用例会保证可以构造出 有效 的二叉树。
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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const isRoot = new Map(); // 数值对应的节点是否为根节点的哈希表
  const nodes = new Map(); // 数值与对应节点的哈希表

  for (const d of descriptions) {
    const p = d[0];
    const c = d[1];
    const left = d[2] === 1;

    if (!isRoot.has(p)) {
      isRoot.set(p, true);
    }
    isRoot.set(c, false);

    // 创建或更新节点
    if (!nodes.has(p)) {
      nodes.set(p, new TreeNode(p));
    }
    if (!nodes.has(c)) {
      nodes.set(c, new TreeNode(c));
    }

    if (left) {
      nodes.get(p).left = nodes.get(c);
    } else {
      nodes.get(p).right = nodes.get(c);
    }
  }

  // 寻找根节点
  let root = -1;
  for (const [val, isRootNode] of isRoot.entries()) {
    if (isRootNode) {
      root = val;
      break;
    }
  }

  return nodes.get(root);
};
