/**
 * 385. 迷你语法分析器
 *
 * 给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 NestedInteger 。
 *
 * 列表中的每个元素只可能是整数或整数嵌套列表
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * 可能会没有嵌套,如果第一个字符不是[,那么这就是一个纯数字吧
 * 
 * 好麻烦,没步都要用NestedInteger
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== "[") {
    return new NestedInteger(parseInt(s));
  }
  const stack = [];
  let num = 0;
  let negative = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "-") {
      negative = true;
    } else if (isDigit(c)) {
      num = num * 10 + c.charCodeAt() - "0".charCodeAt();
    } else if (c === "[") {
      stack.push(new NestedInteger());
    } else if (c === "," || c === "]") {
      if (isDigit(s[i - 1])) {
        if (negative) {
          num *= -1;
        }
        stack[stack.length - 1].add(new NestedInteger(num));
      }
      num = 0;
      negative = false;
      if (c === "]" && stack.length > 1) {
        const ni = stack.pop();
        stack[stack.length - 1].add(ni);
      }
    }
  }
  return stack.pop();
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
};
