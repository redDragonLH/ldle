/**
 * 1678. 设计 Goal 解析器
 *
 * 你设计一个可以解释字符串 command 的 Goal 解析器 。command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。然后，按原顺序将经解释得到的字符串连接成一个字符串。
 *
 * 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。
 */
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let stock = [];
  let len = command.length;
  for (let i = 0; i < len; i++) {
    if (command[i] === ")") {
      let str = command[i];
      let end = stock.pop();
      while (end !== "(") {
        str = end + str;
        end = stock.pop();
      }
      str = end + str;
      if (str === "()") {
        stock.push("o");
        continue;
      } else {
        stock.push("al");
        continue;
      }
    }
    stock.push(command[i]);
  }
  return stock.join("");
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了85.27%
 * 的用户内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了69.77%的用户
 */