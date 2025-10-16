/**
 * 2598. 执行操作后的最大 MEX
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 value 。
 * 在一步操作中，你可以对 nums 中的任一元素加上或减去 value 。
 *  * 例如，如果 nums = [1,2,3] 且 value = 2 ，你可以选择 nums[0] 减去 value ，得到 nums = [-1,2,3] 。
 * 数组的 MEX (minimum excluded) 是指其中数组中缺失的最小非负整数。
 *  * 例如，[-1,2,3] 的 MEX 是 0 ，而 [1,0,3] 的 MEX 是 2 。
 * 返回在执行上述操作 任意次 后，nums 的最大 MEX 。
 */

/**
 * 简单来说就是用value 去凑齐从0开始的所有整数，
 * 有点很发散啊，怎么确定已有元素怎么处理最优呢
 * 
 * 果然还是贪心
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const mp = new Array(value).fill(0);
  for (let x of nums) {
    // 计算 x 对 value 取模后的非负结果，确保即使 x 为负数也能得到 0 到 value-1 之间的值
    const v = ((x % value) + value) % value;
    mp[v]++;
  }
  let mex = 0;
  while (mp[mex % value] > 0) {
    mp[mex % value]--;
    mex++;
  }
  return mex;
};
/**
 * 执行用时：28 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 * 内存消耗：71.28 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */