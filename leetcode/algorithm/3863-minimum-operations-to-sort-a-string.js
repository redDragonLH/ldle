/**
 * 3863. 将一个字符串排序的最小操作次数
 *
 * 给你一个由小写英文字母组成的字符串 s。
 * 在一次操作中，你可以选择 s 的任意 子字符串（但 不能 是整个字符串），并将其按 非降序字母顺序 进行 排序。
 * 返回使 s 按 非降序 排列所需的 最小 操作次数。如果无法做到，则返回 -1。
 */
/**
 * 有点脑筋急转弯的意思,任意字符串那就可以是排除第一个字符或者最后一个字符的子字符串.这样的话就分成了两部分,也就是前缀后缀和已排序数据,
 * 然后对比这两部分,就能得出结论,基本就是一次排序到三次排序就可以得到结果,具体情况是根据前缀后缀是否是当前字符串最小或最大来决定的。
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const n = s.length;

  let mx = "a",
    mn = "z";
  let sorted = true;
  for (let i = 0; i < n; i++) {
    if (s[i] > mx) {
      mx = s[i];
    }
    if (s[i] < mn) {
      mn = s[i];
    }
    if (i > 0 && s[i - 1] > s[i]) {
      sorted = false;
    }
  }
  if (sorted) {
    return 0;
  }
    if (n === 2) {
    return -1;
  }
  // 如果首字符是最小值或者尾字符是最大值，只需一次操作即可
  if (s[0] === mn || s[n - 1] === mx) {
    return 1;
  }
  // 如果中间有最小值或最大值，只需两次操作即可
  for (let i = 1; i < n - 1; i++) {
    if (s[i] === mn || s[i] === mx) {
      return 2;
    }
  }
  return 3;
};
/**
 * 执行用时 : 46ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :62.64 MB, 在所有 JavaScript 提交中击败了-%的用户
 */