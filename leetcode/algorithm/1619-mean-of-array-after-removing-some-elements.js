/**
 * 1619. 删除某些元素后的数组均值
 *
 * 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
 *
 * 与 标准答案 误差在 10-5 的结果都被视为正确结果。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const n = arr.length;
  // 保证有序
  arr.sort((a, b) => a - b);
  let partialSum = 0;
  for (let i = n / 20; i < (19 * n) / 20; i++) {
    partialSum += arr[i];
  }
  // 减去前后各5%
  return partialSum / (n * 0.9);
};
