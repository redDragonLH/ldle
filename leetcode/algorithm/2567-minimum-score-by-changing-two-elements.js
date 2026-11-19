/**
 * 2567. 修改两个元素的最小分数
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 *  * nums 的 最小 得分是满足 0 <= i < j < nums.length 的 |nums[i] - nums[j]| 的最小值。
 *  * nums的 最大 得分是满足 0 <= i < j < nums.length 的 |nums[i] - nums[j]| 的最大值。
 *  * nums 的分数是 最大 得分与 最小 得分的和。
 * 我们的目标是最小化 nums 的分数。你 最多 可以修改 nums 中 2 个元素的值。
 * 请你返回修改 nums 中 至多两个 元素的值后，可以得到的 最小分数 。
 * |x| 表示 x 的绝对值。
 */
/**
 * 绝对值的最小值就是0了,这就是最小得分了,
 * 如何让最大得分最小呢?应该是提升平均值,难道是把最小的两个数改大或者最大的两个数改小?
 *
 * 应该有个统一的判断逻辑,因为在排序之后就可以有四个元素可以考虑修改: 最小的两个和最大的两个。尽量让最大最小值的差值最小。
 * 那就得考虑三种情况, 修改最小的两个数、修改最大的两个数、修改最小的一个和最大的一个。
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (n <= 3) return 0;
  return Math.min(
    nums[n - 1] - nums[2], // 修改最小的两个数
    nums[n - 3] - nums[0], // 修改最大的两个数
    nums[n - 2] - nums[1], // 修改最小的一个和最大的一个
  );
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗：68.69 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */