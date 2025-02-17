/**
 * 1287. 有序数组中出现次数超过25%的元素
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 请你找到并返回这个整数
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const len = arr.length;
  const target = len / 4;
  let count = 1;
  for (let i = 1; i < len; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
      if (count > target) {
        return arr[i];
      }
    } else {
      count = 1;
    }
  }
  return arr[0];
};
