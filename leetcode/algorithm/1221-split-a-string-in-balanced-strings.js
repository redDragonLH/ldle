/**
 * 1221. 分割平衡字符串
 *
 * 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。
 * 给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 注意：分割得到的每个字符串都必须是平衡字符串。
 * 返回可以通过分割得到的平衡字符串的 最大数量 。
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  //遍历字符串,字串数量匹配则直接+1
  let result = 0,
    r = 0,
    l = 0;

  for (const item of s) {
    if (item === "R") r++;
    else l++;
    if (r === l) {
      result++;
      r = l = 0;
    }
  }
  return result;
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了9.76%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了5.48%的用户
 */

/**
 * 官方题解 贪心
 */
 var balancedStringSplit = function(s) {
     // 使用了一个变量作为指示,当变量为0时说明符合题意
    let ans = 0, d = 0;
    for (let i = 0; i < s.length; ++i) {
        const ch = s[i];
        if (ch === 'L') {
            ++d;
        } else {
            --d;
        }
        if (d === 0) {
            ++ans;
        }
    }
    return ans;
};