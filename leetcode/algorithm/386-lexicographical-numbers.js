/**
 * 386. 字典序排数
 *
 * 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
 *
 * 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr.sort();
};

/**
 * 语言原生方法
 * 
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了82.64%的用户
 * 内存消耗：48 MB, 在所有 JavaScript 提交中击败了80.56%的用户
 */