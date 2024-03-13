/**
 * 2864. 最大二进制奇数
 *
 * 给你一个 二进制 字符串 s ，其中至少包含一个 '1' 。
 * 你必须按某种方式 重新排列 字符串中的位，使得到的二进制数字是可以由该组合生成的 最大二进制奇数 。
 * 以字符串形式，表示并返回可以由给定组合生成的最大二进制奇数。
 * 注意 返回的结果字符串 可以 含前导零。
 */

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let lenOfOne = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === "1") {
      lenOfOne++;
    }
  }
  return "1".repeat(lenOfOne - 1) + "0".repeat(len - lenOfOne) + "1";
};
/**
 * 执行用时：95 ms, 在所有 JavaScript 提交中击败了7.69%的用户
 * 内存消耗：53.35 MB, 在所有 JavaScript 提交中击败了18.46%的用户
 */
