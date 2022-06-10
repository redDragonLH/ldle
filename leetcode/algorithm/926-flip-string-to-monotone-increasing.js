/**
 * 926. 将字符串翻转到单调递增
 *
 * 如果一个二进制字符串，是以一些 0（可能没有 0）后面跟着一些 1（也可能没有 1）的形式组成的，那么该字符串是 单调递增 的。
 *
 * 给你一个二进制字符串 s，你可以将任何 0 翻转为 1 或者将 1 翻转为 0 。
 *
 * 返回使 s 单调递增的最小翻转次数。
 */

/**
 * 找到一个点，点左边的1很少，点右边的0较少
 * 前缀和后缀和么
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let sLen = s.length;

  let prefix = new Array(sLen).fill(0);
  let suffix = new Array(sLen).fill(0);

  for (let i = 1; i < sLen; i++) {
    if (s[i - 1] === "1") {
      prefix[i] = prefix[i - 1] + 1;
    } else prefix[i] = prefix[i - 1];
  }
  let min = Math.min(sLen, prefix[sLen-1]);;

  for (let i = sLen - 2; i >= 0; i--) {
    if (s[i + 1] === "0") {
      suffix[i] = suffix[i + 1] + 1;
    } else suffix[i] = suffix[i + 1];
    min = Math.min(min, prefix[i] + suffix[i]);

  }
  return min;
};
/**
 * 前缀和，后缀和
 * 怎么还越优化耗时越长，减少了一个循环，时间应该有提升啊
 * 
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了50.77%的用户
 * 内存消耗：48.6 MB, 在所有 JavaScript 提交中击败了61.54%的用户
 */