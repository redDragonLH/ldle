/**
 * 919. 完全二叉树插入器
 *
 * 完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。
 * 设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。
 *
 * 实现 CBTInserter 类:
 *  * CBTInserter(TreeNode root) 使用头节点为 root 的给定树初始化该数据结构；
 *  * CBTInserter.insert(int v)  向树中插入一个值为 Node.val == val的新节点 TreeNode。使树保持完全二叉树的状态，并返回插入节点 TreeNode 的父节点的值；
 *  * CBTInserter.get_root() 将返回树的头节点。
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
 * 理论上每次层级遍历就好了，但是每次都要遍历性能不太行吧，可以在一次遍历之内把位置保存下来。一个一个填
 * 但是得先能确认层级，但是也就最后一层会有缺损，也就是倒数第二层没有数据，但是也可能是最后一层是完美的，需要新开一层
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.storey_traverse = function () {
  let storeyData = [];
};
/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

/**
 * 一个更巧妙地方式，但是这样真的好么，也不对，是把所有元素都放进队列里然后找到缺口，这样先处理倒数第二层，再处理倒数第一层，这样肯定可以处理到所有情况
 * @param {*} root 
 */
var CBTInserter = function (root) {
  this.candidate = [];
  this.root = root;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    if (!(node.left && node.right)) {
      this.candidate.push(node);
    }
  }
};

CBTInserter.prototype.insert = function (val) {
  const child = new TreeNode(val);
  const node = this.candidate[0];
  let ret = node.val;
  if (!node.left) {
    node.left = child;
  } else {
    node.right = child;
    this.candidate.shift();
  }
  this.candidate.push(child);
  return ret;
};

CBTInserter.prototype.get_root = function () {
  return this.root;
};
