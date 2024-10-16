/**
 * 3194. 最小元素和最大元素的最小平均值
 *
 * 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。
 * 你需要重复以下步骤 n / 2 次：
 *  * 从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
 *  * 将 (minElement + maxElement) / 2 加入到 averages 中。
 * 返回 averages 中的 最小 元素。
 */

/**
 * 最简单的思路就是模拟
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  let minAverages = Number.MAX_SAFE_INTEGER;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    minAverages = Math.min(minAverages, (nums[left] + nums[right]) / 2);
    left++;
    right--;
  }
  return minAverages;
};
/**
 * 执行用时 :71 ms, 在所有 JavaScript 提交中击败了55.32%的用户
 * 内存消耗 :51.30 MB, 在所有 JavaScript 提交中击败了44.68%的用户
 */
