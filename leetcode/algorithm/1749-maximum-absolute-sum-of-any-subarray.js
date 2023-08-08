/**
 * 1749. 任意子数组和的绝对值的最大值
 *
 * 给你一个整数数组 nums 。一个子数组 [numsl, numsl+1, ..., numsr-1, numsr] 的 和的绝对值 为 abs(numsl + numsl+1 + ... + numsr-1 + numsr) 。
 *
 * 请你找出 nums 中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值 。
 * abs(x) 定义如下：
 *  * 如果 x 是负整数，那么 abs(x) = -x 。
 *  * 如果 x 是非负整数，那么 abs(x) = x 。
 */

/**
 * 一个变量绝对值的最大值,可能是这个变量的最大值的绝对值,也可能是这个变量的最小值的绝对值.题目要求任意子数组和的绝对值的最大值,,可以分别求出子数组和的最大值和子数组和的最小值
 * 
 * 子数组是连续数组的一个切片(即占据连续位置)，并且固有地保持元素的顺序
 * 子序列就是在原来序列中找出一部分组成的序列（子序列不一定连续）,并且顺序相对保持
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let positiveMax = 0,
    negativeMin = 0;
  let positiveSum = 0,
    negativeSum = 0;
  // 按顺序相加可以找到最大值,最小值么
  // 前缀和与最大最小值比较
  for (let num of nums) {
    positiveSum += num;
    positiveMax = Math.max(positiveMax, positiveSum);
    positiveSum = Math.max(0, positiveSum);

    negativeSum += num;
    negativeMin = Math.min(negativeMin, negativeSum);
    negativeSum = Math.min(0, negativeSum);
  }
  return Math.max(positiveMax, -negativeMin);
};
