/**
 * 367. 有效的完全平方数
 *
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function (num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    // 必须进行 乘法运算验证才行
    return sqrtNum * sqrtNum === num;
  };