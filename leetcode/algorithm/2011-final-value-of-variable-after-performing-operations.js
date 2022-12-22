/**
 * 2011. 执行操作后的变量值
 *
 * 存在一种仅支持 4 种操作和 1 个变量 X 的编程语言：
 *  * ++X 和 X++ 使变量 X 的值 加 1
 *  * --X 和 X-- 使变量 X 的值 减 1
 *
 * 最初，X 的值是 0
 *
 * 给你一个字符串数组 operations ，这是由操作组成的一个列表，返回执行所有操作后， X 的 最终值 。
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  const mapping = {
    "++X": 1,
    "X++": 1,
    "--X": -1,
    "X--": -1,
  };
  let result = 0;
  for (const operate of operations) {
    result += mapping[operate];
  }
  return result;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了24.26%的用户
 * 内存消耗：42.9 MB, 在所有 JavaScript 提交中击败了15.39%的用户
 */

/**
 * 执行最快题解
 * 
 * 为什么是最快的
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let plus = (div = 0);
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("+")) {
      plus++;
    } else {
      div++;
    }
  }

  return plus - div;
};
