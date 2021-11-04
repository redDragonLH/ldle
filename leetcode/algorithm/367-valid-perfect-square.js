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

/**
 * 可以使用暴力法遍历所有数据找到 x*x = num的值
 */
var isPerfectSquare = function (num) {
  let x = 1;
  while (x * x < num) {
    x++;
  }
  if (x * x === num) return true;
  return false;
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了96.11%的用户
 * 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了67.25%的用户
 */

/**
 * 二分查找优化暴力法
 *
 * 因为num是正整数,所以若正整数x满足 x*x=num,那么 一定有1 <= x <= num (可能会等于num吗)
 * 所以可以将1与num作为二分查找的边界,在这之内查找x
 */

/**
 * 牛顿迭代法
 */