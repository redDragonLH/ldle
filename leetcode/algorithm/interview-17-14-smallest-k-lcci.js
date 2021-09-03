/**
 * 面试题 17.14. 最小K个数
 *
 * 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
 */

/**
 * 用小顶堆最好了啦
 * 不过先用排序实现一下
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  arr.sort((a, b) => a - b);
  let result = [];
  while (k) {
    result.push(arr.shift());
    k--;
  }
  return result;
};
/**
 * 竟然没超时,绝了
 * 执行用时：7780 ms, 在所有 JavaScript 提交中击败了5.01%
 * 的用户内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了22.12%的用户
 */