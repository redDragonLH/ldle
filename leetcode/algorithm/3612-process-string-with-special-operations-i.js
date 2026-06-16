/**
 * 3612. 用特殊操作处理字符串 I
 *
 * 给你一个字符串 s，它由小写英文字母和特殊字符：*、# 和 % 组成。
 * 请根据以下规则从左到右处理 s 中的字符，构造一个新的字符串 result：
 *  * 如果字符是 小写 英文字母，则将其添加到 result 中。
 *  * 字符 '*' 会 删除 result 中的最后一个字符（如果存在）。
 *  * 字符 '#' 会 复制 当前的 result 并 追加 到其自身后面。
 *  * 字符 '%' 会 反转 当前的 result。
 * 在处理完 s 中的所有字符后，返回最终的字符串 result。
 */
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  let result = "";
  for (let char of s) {
    if (char >= "a" && char <= "z") {
      result += char;
    } else if (char === "*") {
      result = result.slice(0, -1);
    } else if (char === "#") {
      result += result;
    } else if (char === "%") {
      result = result.split("").reverse().join("");
    }
  }
  return result;
};
/**
 * 执行用时 :3 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :63.19 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */