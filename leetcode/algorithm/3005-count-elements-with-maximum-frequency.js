/**
 * 3005. 最大频率元素计数
 *
 * 给你一个由 正整数 组成的数组 nums 。
 * 返回数组 nums 中所有具有 最大 频率的元素的 总频率 。
 * 元素的 频率 是指该元素在数组中出现的次数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const frequencyMap = new Map();
  let maxFrequency = 0;

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    maxFrequency = Math.max(maxFrequency, frequencyMap.get(num));
  }

  let totalFrequency = 0;
  for (const [num, freq] of frequencyMap.entries()) {
    if (freq === maxFrequency) {
      totalFrequency += freq;
    }
  }

  return totalFrequency;
};
/**
 * 执行用时：7 ms, 在所有 JavaScript 提交中击败了10.71%的用户
 * 内存消耗：58.46 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */