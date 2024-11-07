/**
 * 3255. 长度为 K 的子数组的能量值 II
 *
 * 给你一个长度为 n 的整数数组 nums 和一个正整数 k 。
 * 一个数组的 能量值 定义为：
 *  * 如果 所有 元素都是依次 连续 且 上升 的，那么能量值为 最大 的元素。
 *  * 否则为 -1 。
 * 你需要求出 nums 中所有长度为 k 的 子数组 的能量值。
 * 请你返回一个长度为 n - k + 1 的整数数组 results ，其中 results[i] 是子数组 nums[i..(i + k - 1)] 的能量值。
 */

/**
 * 3254的题解超时了
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const n = nums.length;
  // cnt 记录连续递增的个数,如果连续递增的个数大于等于k,则结果数组中的值为nums[i]
  let cnt = 0;
  const ans = new Array(n - k + 1).fill(-1);
  for (let i = 0; i < n; i++) {
    cnt = i === 0 || nums[i] - nums[i - 1] !== 1 ? 1 : cnt + 1;
    if (cnt >= k) {
      ans[i - k + 1] = nums[i];// 连续递增,说明这个子数组的能量值为最大值
    }
  }
  return ans;
};
/**
 * 官方题解
 * 这个思路不错,利用了很多细节条件来优化逻辑,基本上一次遍历就能计算出结果
 */
