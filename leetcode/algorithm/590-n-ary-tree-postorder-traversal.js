/**
 * 590. N 叉树的后序遍历
 * 
 * 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。
 * 
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 后序遍历： 左->右->根
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    let result = [];
    deep(root, result)
    return result
};
const deep = (root, arr) => {
    if (!root) return false;
    root.children.forEach(e => {
        deep(e, arr)
    });
    arr.push(root.val)
}
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了20.71%的用户
 * 内存消耗：48.4 MB, 在所有 JavaScript 提交中击败了5.13%的用户
 */