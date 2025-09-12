/**
 * 3227. 字符串元音游戏
 *
 * 小红和小明在玩一个字符串元音游戏。
 * 给你一个字符串 s，小红和小明将轮流参与游戏，小红 先 开始：
 *  * 在小红的回合，她必须移除 s 中包含 奇数 个元音的任意 非空 子字符串。
 *  * 在小明的回合，他必须移除 s 中包含 偶数 个元音的任意 非空 子字符串。
 * 第一个无法在其回合内进行移除操作的玩家输掉游戏。假设小红和小明都采取 最优策略 。
 * 如果小红赢得游戏，返回 true，否则返回 false。
 * 英文元音字母包括：a, e, i, o, 和 u。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  // 只要是有元音字母，小红就能赢
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      return true;
    }
  }
  return false;
};
/**
 * 执行用时：16 ms, 在所有 JavaScript 提交中击败了 57.14%的用户
 * 内存消耗：59.53 MB, 在所有 JavaScript 提交中击败了71.43%的用户
 */
