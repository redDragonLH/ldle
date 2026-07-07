/**
 * 3754. 连接非零数字并乘以其数字和 I
 *
 * 给你一个整数 n。
 * 将 n 中所有的 非零数字 按照它们的原始顺序连接起来，形成一个新的整数 x。如果不存在 非零数字 ，则 x = 0。
 * sum 为 x 中所有数字的 数字和 。
 * 返回一个整数，表示 x * sum 的值。
 */
/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  let str = n.toString();
  let x = "";
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      x += str[i];
      sum += parseInt(str[i]);
    }
  }
  if (x === "") {
    return 0;
  }
  return parseInt(x) * sum;
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :55.89 MB, 在所有 JavaScript 提交中击败了60.00%的用户
 */