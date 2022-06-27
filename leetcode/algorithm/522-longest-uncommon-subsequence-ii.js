/**
 * 522. 最长特殊序列 II
 *
 * 给定字符串列表 strs ，返回其中 最长的特殊序列 。如果最长特殊序列不存在，返回 -1 。
 *
 * 特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。
 *
 * s 的 子序列可以通过删去字符串 s 中的某些字符实现。
 *  *  例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。
 */

/**
 * 此题的核心是怎样判断子序列,
 * 看子序列的描述是很难想到怎么才能匹配的
 *
 * 判断子序列:
 *  使用贪心 + 双指针.即初始时指针 pt1和 ptj 分别指向两个字符串的首字符.如果两个字符相同,那么两个指针都往右移动一个位置,表示匹配成功;否则只往右移动指针ptj,表示匹配失败.
 *  如果pti 遍历完了整个字符串.就说明stpr[i] 是 str[j]的子序列
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const n = strs.length;
  let ans = -1;
  for (let i = 0; i < n; ++i) {
    let check = true;
    for (let j = 0; j < n; ++j) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
};
// 核心算法
const isSubseq = (s, t) => {
  let ptS = 0,
    ptT = 0;
  while (ptS < s.length && ptT < t.length) {
    if (s[ptS] === t[ptT]) {
      ++ptS;
    }
    ++ptT;
  }
  // ptS 如果是 ptT的子序列,就必须能遍历完
  return ptS === s.length;
};
