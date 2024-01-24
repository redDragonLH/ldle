/**
 * 2865. 美丽塔 I
 *
 * 给你一个长度为 n 下标从 0 开始的整数数组 maxHeights 。
 * 你的任务是在坐标轴上建 n 座塔。第 i 座塔的下标为 i ，高度为 heights[i] 。
 * 如果以下条件满足，我们称这些塔是 美丽 的：
 *  * 1 <= heights[i] <= maxHeights[i]
 *  * heights 是一个 山脉 数组。
 *  * 如果存在下标 i 满足以下条件，那么我们称数组 heights 是一个 山脉 数组：
 *
 * 对于所有 0 < j <= i ，都有 heights[j - 1] <= heights[j]
 * 对于所有 i <= k < n - 1 ，都有 heights[k + 1] <= heights[k]
 * 请你返回满足 美丽塔 要求的方案中，高度和的最大值 。
 */

/**
 * 选择一个元素,作为山脉的最高点,然后向前后便利
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  let len = maxHeights.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    let max = maxHeights[i];
    result = Math.max(result, getCount(max, maxHeights, i, len));
  }
  return result;
};
const getCount = (max, maxHeights, index, len) => {
  let result = max;
  let current = max;
  for (let i = index + 1; i < len; i++) {
    current = Math.min(current, maxHeights[i]);
    result += current;
  }
  current = max;
  for (let j = index - 1; j > -1; j--) {
    current = Math.min(current, maxHeights[j]);
    result += current;
  }
  return result;
};
/**
 * 执行用时：83 ms, 在所有 JavaScript 提交中击败了74.19%的用户
 * 内存消耗：51.36 MB, 在所有 JavaScript 提交中击败了6.45%的用户
 */
