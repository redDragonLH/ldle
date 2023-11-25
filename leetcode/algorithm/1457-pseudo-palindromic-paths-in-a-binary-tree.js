/**
 * 1457. 二叉树中的伪回文路径
 *
 * 给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。
 * 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。
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
 * 深度优先遍历，找到一条路，然后查询这里的元素数量是否都是偶数，顶多一个奇数
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
    let result=[0]
    deep(root,[],result)
    return result[0]
};
let deep =(root,data,result)=>{
    let newData = [...data,root.val]

    if(root.left===null && root.right===null){
        console.log(root,newData)
        result[0]=result[0]+ isPalindromic(newData.sort((a,b)=>a-b))
        return ;
    }

    if(root.left){
        deep(root.left,newData,result)
    }
    if(root.right){
        deep(root.right,newData,result)
    }
}
const isPalindromic=(data)=>{
    let odd =0
    let box = new Array(10).fill(0)
    data.forEach(e => {
        box[e]++
    });
    box.forEach(e=>{
        if(e%2){
            odd++
        }
    })
    return odd>1?0:1
}
/**
 * 没想到内存超了
 */