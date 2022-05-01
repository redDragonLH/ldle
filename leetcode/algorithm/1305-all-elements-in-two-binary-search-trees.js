/**
 * 1305. 两棵二叉搜索树中的所有元素
 *
 * 给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。
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
 * 还以为官方题解有从树直接排序的方法,还是只能先转数组再归并
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const nums1 = [];
  const nums2 = [];

  const inorder = (node, res) => {
    if (node) {
      inorder(node.left, res);
      res.push(node.val);
      inorder(node.right, res);
    }
  };

  inorder(root1, nums1);
  inorder(root2, nums2);

  const merged = [];
  let posi1 = 0,
    posi2 = 0;
  let len1 = nums1.length,
    len2 = nums2.length;
  while (len1 > posi1 || len2 > posi2) {
    if (nums1[posi1] > nums2[posi2]) {
      merged.push(nums2[posi2]);
      posi2++;
    } else if (nums1[posi1] < nums2[posi2]) {
      merged.push(nums1[posi1]);
      posi1++;
    } else {
      len1 > posi1 && merged.push(nums1[posi1]);
      posi1++;
      len2 > posi2 && merged.push(nums2[posi2]);
      posi2++;
    }
  }
  return merged;
};
/**
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了92.08%的用户
 * 内存消耗：53.3 MB, 在所有 JavaScript 提交中击败了28.71%的用户
 */
