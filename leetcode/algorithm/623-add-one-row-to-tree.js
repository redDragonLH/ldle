/**
 * 623. 在二叉树中增加一行
 *
 * 给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。
 *
 * 注意，根节点 root 位于深度 1 。
 *
 * 加法规则如下:
 *  * 给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
 *  * cur 原来的左子树应该是新的左子树根的左子树。
 *  * cur 原来的右子树应该是新的右子树根的右子树。
 *  * 如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。
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
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    deepNest(root, val, 1,depth)
    return root
};
const deepNest = (node, val, deep, depth) => {
    if(!node)return false
  if (deep === depth - 1) {
    let leftNode = TreeNode(val, node.left);
    let rightNode = TreeNode(val, null, node.right);
    node.left = leftNode;
    node.right = rightNode;
    return true;
  }
  deepNest(node.left,val,deep+1,depth)
  deepNest(node.right,val,deep+1,depth)
};

/**
 * return root这种就类似重建一棵树
 * @param {*} root 
 * @param {*} val 
 * @param {*} depth 
 * @returns 
 */
var addOneRow = function(root, val, depth) {
    if (!root) {
        return null;
    }
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        root.left = addOneRow(root.left, val, depth - 1);
        root.right = addOneRow(root.right, val, depth - 1);
    }
    return root;
};