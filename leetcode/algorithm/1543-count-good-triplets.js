/**
 * 1534. 统计好三元组
 *
 * 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
 * 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
 *  * 0 <= i < j < k < arr.length
 *  * |arr[i] - arr[j]| <= a
 *  * |arr[j] - arr[k]| <= b
 *  * |arr[i] - arr[k]| <= c
 * 其中 |x| 表示 x 的绝对值。
 * 返回 好三元组的数量 。
 */

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let ans = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          ans++;
        }
      }
    }
  }
  return ans;
};
/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了98.37%的用户
 * 内存消耗：56.16 MB, 在所有 JavaScript 提交中击败了34.24%的用户
 */