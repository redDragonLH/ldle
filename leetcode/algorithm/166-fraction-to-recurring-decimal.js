/**
 * 166. 分数到小数
 *
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 如果存在多个答案，只需返回 任意一个 。
 * 对于所有给定的输入，保证 答案字符串的长度小于 10^4 。
 */
/**
 * 官方题解: 长除法
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator % denominator == 0) {
    return "" + Math.floor(numerator / denominator);
  }

  const sb = [];
  if ((numerator < 0) ^ (denominator < 0)) {
    sb.push("-");
  }

  // 整数部分
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator);
  sb.push(integerPart);
  sb.push(".");

  // 小数部分
  const fractionPart = [];
  const remainderIndexDic = new Map();
  let remainder = numerator % denominator;
  let index = 0;
  while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
    remainderIndexDic.set(remainder, index);
    remainder *= 10;
    fractionPart.push(Math.floor(remainder / denominator));
    remainder %= denominator;
    index++;
  }
  if (remainder !== 0) {
    // 有循环节
    let insertIndex = remainderIndexDic.get(remainder);
    fractionPart.splice(insertIndex, 0, "(");
    fractionPart.push(")");
  }
  sb.push(fractionPart.join(""));

  return sb.join("");
};
