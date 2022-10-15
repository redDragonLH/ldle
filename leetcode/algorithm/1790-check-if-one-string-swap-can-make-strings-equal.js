/**
 * 1790. 仅执行一次字符串交换能否使两个字符串相等
 *
 * 给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
 *
 * 如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。
 */
/**
 * 也就是判断 element in each index 的元素是否只有两个不相等,并且字符还是相等的
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const n = s1.length;
  // 保存元素为必须,要不然没法判断字符是不是相等的
  const diff = [];
  for (let i = 0; i < n; ++i) {
    if (s1[i] !== s2[i]) {
      if (diff.length >= 2) {
        return false;
      }
      diff.push(i);
    }
  }
  if (diff.length === 0) {
    return true;
  }
  if (diff.length !== 2) {
    return false;
  }
  // 简单粗暴直接交叉对比
  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};
