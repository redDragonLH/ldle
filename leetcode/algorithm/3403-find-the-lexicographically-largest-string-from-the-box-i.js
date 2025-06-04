/**
 * 3403. 从盒子中找出字典序最大的字符串 I
 *
 * 给你一个字符串 word 和一个整数 numFriends。
 * Alice 正在为她的 numFriends 位朋友组织一个游戏。游戏分为多个回合，在每一回合中：
 *  * word 被分割成 numFriends 个 非空 字符串，且该分割方式与之前的任意回合所采用的都 不完全相同 。
 *  * 所有分割出的字符串都会被放入一个盒子中。
 * 在所有回合结束后，找出盒子中 字典序最大的 字符串。
 */
/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
  const n = word.length;

  // 最长字符串长度
  const length = n - numFriends + 1;

  // 使用滑动窗口,窗口长度为 length,每次移动一个字符位置,检查当前字符串的字典序
  let result = "";
  for (let i = 0; i <= n - length; i++) {
    const currentSubstring = word.slice(i, i + length);
    if (currentSubstring > result) {
      result = currentSubstring;
    }
  }

  return result;
};
/**
 * 最长不代表最大,需要考虑 numFriends 的影响
 * 例如 word = "abcde", numFriends = 2, 则最长字符串为 "cde", 但字典序最大的是 "de"
 */

/**
 * 官方题解
 */

var answerString = function (word, numFriends) {
  if (numFriends === 1) {
    return word;
  }
  let n = word.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    // 么次分割的长度为 n - numFriends + 1 或者剩余长度
    let s = word.substring(i, Math.min(i + n - numFriends + 1, n));
    if (s > res) {
      res = s;
    }
  }
  return res;
};
