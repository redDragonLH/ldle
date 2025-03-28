/**
 * 2716. 最小化字符串长度
 *
 * 给你一个下标从 0 开始的字符串 s ，重复执行下述操作 任意 次：
 * 在字符串中选出一个下标 i ，并使 c 为字符串下标 i 处的字符。并在 i 左侧（如果有）和 右侧（如果有）各 删除 一个距离 i 最近 的字符 c 。
 * 请你通过执行上述操作任意次，使 s 的长度 最小化 。
 * 返回一个表示 最小化 字符串的长度的整数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  // 使用 Set 来存储唯一字符
  const uniqueChars = new Set(s);

  // 返回唯一字符的数量
  return uniqueChars.size;
};
/**
 * 执行用时：12 ms, 在所有 JavaScript 提交中击败了35.71%的用户
 * 内存消耗：64.90 MB, 在所有 JavaScript 提交中击败了35.71%的用户
 */