/**
 * 449. 序列化和反序列化二叉搜索树
 * 
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 * 设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 编码的字符串应尽可能紧凑。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 用例僵化了点~~~
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return root
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    return data

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * 转成三种遍历方式都可以,只要两个方法的处理顺序是一样的就可以
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let result = [];
    deep(root, result)
    return result.join(',')
};
const deep = (root, array) => {
    if (!root) return false
    deep(root.left, array)
    deep(root.right, array)
    array.push(root.val)
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) {
        return null;
    }
    let arr = data.split(',');
    const length = arr.length;
    const stack = [];

    // 字符串转数字
    for (let i = 0; i < length; i++) {
        stack.push(parseInt(arr[i]));
    }

    const construct = (lower, upper, stack) => {
        if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
            return null;
        }
        const val = stack.pop();
        const root = new TreeNode(val);
        root.right = construct(val, upper, stack);
        root.left = construct(lower, val, stack);
        return root;
    }

    return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */