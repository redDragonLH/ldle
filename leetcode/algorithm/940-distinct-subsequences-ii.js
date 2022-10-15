/**
 * 940. 不同的子序列 II
 *
 * 给定一个字符串 s，计算 s 的 不同非空子序列 的个数。因为结果可能很大，所以返回答案需要对 10^9 + 7 取余 。
 *
 * 字符串的 子序列 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。
 *
 * 例如，"ace" 是 "abcde" 的一个子序列，但 "aec" 不是。
 */

/**
 * 本来数学计算就行了的,但是 不同 这个关键字就有点坑,得用回溯遍历所有情况,还得保存不重复的子序列
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  let len = s.length;
  if (!len) return 0;
  let result = 0;
  let existSubStr = new Set();
  const deep = (mainStr, index, currentStr, existStrs, len) => {
    if (index >= len) return false;
    let subStr = currentStr + mainStr[index];
    if (!existStrs.has(subStr)) {
      existSubStr.add(subStr);
      result = ++result % 1000000007;
    }
    index++;
    deep(s, index, currentStr, existSubStr, len);
    deep(s, index, subStr, existSubStr, len);
  };
  deep(s, 0, "", existSubStr, len);
  console.log(result);
  return result;
};
/**
 * 内存超出,需要优化,Set那里还能咋优化么,感觉不太行,那这思路就废了
 */