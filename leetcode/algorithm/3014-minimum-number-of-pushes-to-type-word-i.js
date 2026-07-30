/**
 * 3014. 输入单词需要的最少按键次数 I
 *
 * 给你一个字符串 word，由 不同 小写英文字母组成。
 * 电话键盘上的按键与 不同 小写英文字母集合相映射，可以通过按压按键来组成单词。例如，按键 2 对应 ["a","b","c"]，我们需要按一次键来输入 "a"，按两次键来输入 "b"，按三次键来输入 "c"。
 * 现在允许你将编号为 2 到 9 的按键重新映射到 不同 字母集合。每个按键可以映射到 任意数量 的字母，但每个字母 必须 恰好 映射到 一个 按键上。你需要找到输入字符串 word 所需的 最少 按键次数。
 * 返回重新映射按键后输入 word 所需的 最少 按键次数。
 * 下面给出了一种电话键盘上字母到按键的映射作为示例。注意 1，*，# 和 0 不 对应任何字母
 */
/**
 * 比较简单的需求,首先就是统计每个字母出现的次数,然后将出现次数最多的字母放在一次按键上,其次的放在2次按键上,以此类推,最后计算总的按键次数即可
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let map = new Map();
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  let arr = Array.from(map.values());
  arr.sort((a, b) => b - a);
  let res = 0;
  let start = 8;
  for (let i = 1; i < 5; i++) {
    start = 8;
    while (start > 0 && arr.length > 0) {
      res += i * arr.shift();
      start--;
    }
  }
  return res;
};
/**
 * 执行用时：3 ms, 在所有 JavaScript 提交中击败了33.33%的用户
 * 内存消耗：56.26 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */