/**
 * 1614. 括号的最大嵌套深度
 *
 * 如果字符串满足以下条件之一，则可以称之为 有效括号字符串（valid parentheses string，可以简写为 VPS）：
 *  * 字符串是一个空字符串 ""，或者是一个不为 "(" 或 ")" 的单字符。
 *  * 字符串可以写为 AB（A 与 B 字符串连接），其中 A 和 B 都是 有效括号字符串 。
 *  * 字符串可以写为 (A)，其中 A 是一个 有效括号字符串 。
 *
 * 类似地，可以定义任何有效括号字符串 S 的 嵌套深度 depth(S)：
 *  * depth("") = 0
 *  * depth(C) = 0，其中 C 是单个字符的字符串，且该字符不是 "(" 或者 ")"
 *  * depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是 有效括号字符串
 *  * depth("(" + A + ")") = 1 + depth(A)，其中 A 是一个 有效括号字符串
 *
 *  例如：""、"()()"、"()(()())" 都是 有效括号字符串（嵌套深度分别为 0、1、2），而 ")(" 、"(()" 都不是 有效括号字符串 。
 * 给你一个 有效括号字符串 s，返回该字符串的 s 嵌套深度 。
 */

/**
 * 应该是用栈判断是否合法
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let result = 0;
  let stack = [];
  let deep = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
      deep++;
      result = Math.max(result, deep);
    } else if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        deep--;
      }
    }
  }
  return result;
};
/**
 * 全是正确的VPS,所以减少很多逻辑
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了50.82%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了87.70%的用户
 */
