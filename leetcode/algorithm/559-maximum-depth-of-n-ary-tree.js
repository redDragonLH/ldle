/**
 * 559. N 叉树的最大深度
 * 
 * 给定一个 N 叉树，找到其最大深度。
 * 
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 
 * N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N叉树~~
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function (root,deep=1) {
    if(!root) return 0;
    if(!root.children.length) return deep;
    // deep 数值改变这么放有点丑，但是放在表达式里肯定不行~~
    deep++

    return Math.max(...root.children.map((e)=> maxDepth(e,deep)))
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了80.97%的用户
 * 内存消耗：41.4 MB, 在所有 JavaScript 提交中击败了26.32%的用户
 */