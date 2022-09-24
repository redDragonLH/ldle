/**
 * 1624. 两个相同字符之间的最长子字符串
 *
 * 给你一个字符串 s，请你返回 两个相同字符之间的最长子字符串的长度 ，计算长度时不含这两个字符。如果不存在这样的子字符串，返回 -1 。
 *
 * 子字符串 是字符串中的一个连续字符序列。
 */
/**
 * 我还以为得双指针
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    // 创建一个保存26字母的数组
  const firstIndex = new Array(26).fill(-1);
  let maxLength = -1;
  //遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 如果么有对应位置没有元素则赋值
    if (firstIndex[s[i].charCodeAt() - "a".charCodeAt()] < 0) {
      firstIndex[s[i].charCodeAt() - "a".charCodeAt()] = i;
    } else {
        // 如果有了元素则不再赋值,因为要最长的
      maxLength = Math.max(
        maxLength,
        i - firstIndex[s[i].charCodeAt() - "a".charCodeAt()] - 1
      );
    }
  }
  return maxLength;
};
