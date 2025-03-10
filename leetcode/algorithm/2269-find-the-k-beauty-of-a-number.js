/**
 * 2269. 找到一个数字的 K 美丽值
 *
 * 一个整数 num 的 k 美丽值定义为 num 中符合以下条件的 子字符串 数目：
 *  * 子字符串长度为 k 。
 *  * 子字符串能整除 num 。
 * 给你整数 num 和 k ，请你返回 num 的 k 美丽值。
 * 注意：
 *  * 允许有 前缀 0 。
 *  * 0 不能整除任何值。
 *  * 一个 子字符串 是一个字符串里的连续一段字符序列。
 */
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let numStr = num.toString();
  let n = numStr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let sub = numStr.slice(i, i + k);
    if (sub.length < k) continue;
    if (num % parseInt(sub) === 0) res++;
  }
  return res;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.09 MB, 在所有 JavaScript 提交中击败了8.70%的用户
 */