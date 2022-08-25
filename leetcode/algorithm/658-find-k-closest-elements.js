/**
 * 658. 找到 K 个最接近的元素
 *
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 *
 * 整数 a 比整数 b 更接近 x 需要满足：
 *  * |a - x| < |b - x| 或者
 *  * |a - x| == |b - x| 且 a < b
 */

/**
 * 找到当前位置,然后向两边匹配,
 *
 * 直接点的就是向两边数数,一边一个,边界条件就是不够咋办,以及数字可能是不连续的,还是得双指针
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = -1,
    right = -1;
  let len = arr.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] === x || (arr[i] < x && arr[i + 1] > x)) {
      left = i;
      right = i + 1;
      break;
    }
  }
  if (x < arr[0]) {
    left = -1;
    right = 0;
  }
  if (x > arr[len - 1]) {
    left = len - 1;
    right = len;
  }
  while (k--) {
    if (left < 0) {
      result.push(arr[right]);
      right++;
      continue;
    }
    if (right >= len) {
      result.push(arr[left]);
      left--;
      continue;
    }
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      result.push(arr[left]);
      left--;
    } else {
      result.push(arr[right]);
      right++;
    }
  }
  return result.sort((a, b) => a - b);
};
/**
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了27.19%的用户
 * 内存消耗：47.8 MB, 在所有 JavaScript 提交中击败了38.89%
 */