/**
 * 1299. 将每个元素替换为右侧最大元素
 *
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 * 完成所有替换操作后，请你返回这个数组。
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const n = arr.length;
  const ans = new Array(n);
  ans[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i + 1], arr[i + 1]);
  }
  return ans;
};
