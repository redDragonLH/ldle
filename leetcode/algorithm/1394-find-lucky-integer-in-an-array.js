/**
 * 1394. 找出数组中的幸运数
 *
 * 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。
 * 给你一个整数数组 arr，请你从中找出并返回一个幸运数。
 *  * 如果数组中存在多个幸运数，只需返回 最大 的那个。
 *  * 如果数组中不含幸运数，则返回 -1 。
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  // 创建一个 Map 来存储每个数字的频率
  const frequencyMap = new Map();

  // 遍历数组，统计每个数字的频率
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let luckyNumber = -1;

  // 遍历 Map，查找幸运数
  for (const [num, freq] of frequencyMap.entries()) {
    if (num === freq) {
      luckyNumber = Math.max(luckyNumber, num);
    }
  }

  return luckyNumber;
};

/**
 * 执行用时：6 ms, 在所有 JavaScript 提交中击败了22.22%的用户
 * 内存消耗：56.18 MB, 在所有 JavaScript 提交中击败了19.44%的用户
 */