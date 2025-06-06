/**
 * 2434. 使用机器人打印字典序最小的字符串
 *
 * 给你一个字符串 s 和一个机器人，机器人当前有一个空字符串 t 。执行以下操作之一，直到 s 和 t 都变成空字符串：
 *  * 删除字符串 s 的 第一个 字符，并将该字符给机器人。机器人把这个字符添加到 t 的尾部。
 *  * 删除字符串 t 的 最后一个 字符，并将该字符给机器人。机器人将该字符写到纸上。
 * 请你返回纸上能写出的字典序最小的字符串。
 */

/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  let cnt = new Array(26).fill(0);
  for (let c of s) {
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let stack = [];
  let res = [];
  let minCharacter = "a";
  for (let c of s) {
    stack.push(c);
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]--;
    while (
      minCharacter !== "z" &&
      cnt[minCharacter.charCodeAt(0) - "a".charCodeAt(0)] === 0
    ) {
      minCharacter = String.fromCharCode(minCharacter.charCodeAt(0) + 1);
    }
    while (stack.length > 0 && stack[stack.length - 1] <= minCharacter) {
      res.push(stack.pop());
    }
  }

  return res.join("");
};
/**
 * 执行用时：132 ms, 在所有 JavaScript 提交中击败了62.50%的用户
 * 内存消耗：78.50 MB, 在所有 JavaScript 提交中击败了62.50%的用户
 */