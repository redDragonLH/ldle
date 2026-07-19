/**
 * 1081. 不同字符的最小子序列
 * 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。
 */
/**
 * 人类化的思路就是去掉重复的字符，然后还要决定去掉前面的还是后面的重复字符？
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const vis = new Array(26).fill(0);
  const num = _.countBy(s);

  const sb = new Array();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!vis[ch.charCodeAt() - "a".charCodeAt()]) {
      while (sb.length > 0 && sb[sb.length - 1] > ch) {
        if (num[sb[sb.length - 1]] > 0) {
          vis[sb[sb.length - 1].charCodeAt() - "a".charCodeAt()] = 0;
          sb.pop();
        } else {
          break;
        }
      }
      vis[ch.charCodeAt() - "a".charCodeAt()] = 1;
      sb.push(ch);
    }
    num[ch]--;
  }
  return sb.join("");
};
