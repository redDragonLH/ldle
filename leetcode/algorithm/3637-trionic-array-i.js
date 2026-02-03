/**
 * 3637. 三段式数组 I
 *
 * 给你一个长度为 n 的整数数组 nums。
 * 如果存在索引 0 < p < q < n − 1，使得数组满足以下条件，则称其为 三段式数组（trionic）：
 *  * nums[0...p] 严格 递增，
 *  * nums[p...q] 严格 递减，
 *  * nums[q...n − 1] 严格 递增。
 * 如果 nums 是三段式数组，返回 true；否则，返回 false。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  const n = nums.length;
  let p = 0;
  // 找到第一个递减的位置
  while (p + 1 < n && nums[p] < nums[p + 1]) {
    p++;
  }
  // p 不能是第一个或最后一个位置
  if (p === 0 || p === n - 1) {
    return false;
  }
  let q = p;
  // 找到第一个递增的位置
  while (q + 1 < n && nums[q] > nums[q + 1]) {
    q++;
  }
  // q 不能是最后一个位置
  if (q === n - 1) {
    return false;
  }
  // 检查剩下的部分是否递增
  while (q + 1 < n && nums[q] < nums[q + 1]) {
    q++;
  }
  return q === n - 1;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :56.00 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */