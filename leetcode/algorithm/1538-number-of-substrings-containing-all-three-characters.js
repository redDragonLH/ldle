/**
 * 1358. 包含所有三种字符的子字符串数目
 *
 * 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。
 * 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。
 */
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const ordA = "a".charCodeAt(0);
  const cnt = Array(3).fill(0);
  let ans = 0,
    left = 0;
  for (let right = 0; right < s.length; right++) {
    cnt[s.charCodeAt(right) - ordA]++;
    while (cnt[0] > 0 && cnt[1] > 0 && cnt[2] > 0) {
      cnt[s.charCodeAt(left) - ordA]--;
      left++;
    }
    ans += left;
  }
  return ans;
};
