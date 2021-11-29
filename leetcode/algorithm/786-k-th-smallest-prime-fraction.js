/**
 * 786. 第 K 个最小的素数分数
 *
 * 给你一个按递增顺序排序的数组 arr 和一个整数 k 。数组 arr 由 1 和若干 素数  组成，且其中所有整数互不相同。
 * 对于每对满足 0 < i < j < arr.length 的 i 和 j ，可以得到分数 arr[i] / arr[j] 。
 * 那么第 k 个最小的分数是多少呢?  以长度为 2 的整数数组返回你的答案, 这里 answer[0] == arr[i] 且 answer[1] == arr[j] 。
 */

/**
 * 这个~~用遍历应该可以解决,但是有点傻
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let arrLen = arr.length;
  let prime = [];
  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (i === j) continue;
      prime.push([arr[i], arr[j], arr[i] / arr[j]]);
    }
  }
  prime.sort((a, b) => a[2] - b[2]);
  let result = prime[k - 1];
  return [result[0], result[1]];
};
/**
 * 这也能过也是佛了
 * 执行用时：2076 ms, 在所有 JavaScript 提交中击败了7.69%的用户
 * 内存消耗：114.4 MB, 在所有 JavaScript 提交中击败了7.69%的用户
 */