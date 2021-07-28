/**
 * 863. 二叉树中所有距离为 K 的结点
 *
 * 给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。
 *
 * 返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 用递归或者广度优先搜索获取到所有节点距离根节点的值绝对距离
 * 然后用当前target 的距离加减 k获取所有可能的距离,
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  let map = new Map();
  let nodeArr = [root];
  let deepLength = 0;
  let targetIndex = -1;
  while (nodeArr.length) {
    let len = nodeArr.length;
    while (len) {
      node = nodeArr.shift();
      if (node.val === target) targetIndex = deepLength;
      map.has(deepLength)
        ? map.set(deepLength, [...map.get(deepLength), node.val])
        : map.set(deepLength, [node.val]);
      node.left && nodeArr.push(node.left);
      node.right && nodeArr.push(node.right);
      len--;
    }
    deepLength++;
  }
  if (targetIndex === -1) return [];
  // 下/上
  // 下好说,当前 targetIndex + K得到的
  // 往上获取要处理分叉,很麻烦
};

/**
 * 官方题解 
 * 从 target 作为根节点遍历元素,在此之前处理数据保证可以遍历到父元素
 */
 var distanceK = function(root, target, k) {
    const parents = new Map();
    const ans = [];

    const findParents = (node) => {
        if (node.left != null) {
            parents.set(node.left.val, node);
            findParents(node.left);
        }
        if (node.right != null) {
            parents.set(node.right.val, node);
            findParents(node.right);
        }
    }

    // 从 root 出发 DFS，记录每个结点的父结点
    findParents(root);

    const findAns = (node, from, depth, k) => {
        if (node == null) {
            return;
        }
        if (depth === k) {
            ans.push(node.val);
            return;
        }
        if (node.left !== from) {
            findAns(node.left, node, depth + 1, k);
        }
        if (node.right !== from) {
            findAns(node.right, node, depth + 1, k);
        }
        if (parents.get(node.val) !== from) {
            findAns(parents.get(node.val), node, depth + 1, k);
        }
    }
    // 从 target 出发 DFS，寻找所有深度为 k 的结点
    findAns(target, null, 0, k);

    return ans;
};