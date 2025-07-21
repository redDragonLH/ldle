/**
 * 1957. 删除字符使字符串变好
 *
 * 一个字符串如果没有 三个连续 相同字符，那么它就是一个 好字符串 。
 * 给你一个字符串 s ，请你从 s 删除 最少 的字符，使它变成一个 好字符串 。
 * 请你返回删除后的字符串。题目数据保证答案总是 唯一的 。
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = "";
  let count = 0;
  let prevChar = "";

  for (let char of s) {
    if (char === prevChar) {
      count++;
    } else {
      count = 1; // Reset count for a new character
      prevChar = char; // Update previous character
    }

    if (count < 3) {
      result += char; // Append character if count is less than 3
    }
  }

  return result;
};

/**
 * 执行用时：61 ms, 在所有 JavaScript 提交中击败了 57.69% 的用户
 * 内存消耗：66.10 MB, 在所有 JavaScript 提交中击败了 57.69% 的用户
 */