/**
 * 1367. 二叉树中的链表
 *
 * 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
 * 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。
 * 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (!root) {
    return false;
  }
  return (
    dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
};

const dfs = function (head, root) {
  if (!head) {
    return true;
  }
  if (!root) {
    return false;
  }
  return (
    head.val === root.val &&
    (dfs(head.next, root.left) || dfs(head.next, root.right))
  );
};
/**
 * 代码竟然如此简洁
 * 把匹配融合在dfs中
 */