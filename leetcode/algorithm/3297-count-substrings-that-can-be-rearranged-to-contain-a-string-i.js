/**
 * 3297. 统计重新排列后包含另一个字符串的子字符串数目 I
 *
 * 给你两个字符串 word1 和 word2 。
 * 如果一个字符串 x 重新排列后，word2 是重排字符串的 前缀 ，那么我们称字符串 x 是 合法的 。
 * 请你返回 word1 中 合法 子字符串 的数目。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  const diff = new Array(26).fill(0);
  for (const c of word2) {
    diff[c.charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  let res = 0;
  let cnt = diff.filter((c) => c < 0).length;
  const update = (c, add) => {
    diff[c] += add;
    if (add === 1 && diff[c] === 0) {
      // 表明 diff[c] 由 -1 变为 0
      cnt--;
    } else if (add === -1 && diff[c] === -1) {
      // 表明 diff[c] 由 0 变为 -1
      cnt++;
    }
  };

  let l = 0,
    r = 0;
  while (l < word1.length) {
    while (r < word1.length && cnt > 0) {
      update(word1.charCodeAt(r) - "a".charCodeAt(0), 1);
      r++;
    }
    if (cnt === 0) {
      res += word1.length - r + 1;
    }
    update(word1.charCodeAt(l) - "a".charCodeAt(0), -1);
    l++;
  }

  return res;
};
