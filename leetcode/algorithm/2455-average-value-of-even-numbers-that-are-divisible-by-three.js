/**
 * 2455. 可被三整除的偶数的平均值
 *
 * 给你一个由正整数组成的整数数组 nums ，返回其中可被 3 整除的所有偶数的平均值。
 *
 * 注意：n 个元素的平均值等于 n 个元素 求和 再除以 n ，结果 向下取整 到最接近的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let conuter = 0;
  let len = 0;
  for (const num of nums) {
    if (!num % 2 && !num % 3) {
      conuter += num;
      len++;
    }
  }
  return parseInt(conuter/len)
};
