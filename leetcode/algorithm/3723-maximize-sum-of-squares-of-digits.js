/**
 * 3723. 数位平方和的最大值
 *
 * 给你两个 正 整数 num 和 sum。
 * 如果一个正整数 n 满足以下两个条件，则称其为 好整数 ：
 *  * n 的位数 恰好 为 num。
 *  * n 的各位数字之和 恰好 为 sum。
 * 一个 好整数 n 的 分数 定义为 n 的各位数字的平方和。
 * 返回一个 字符串 ，表示能获得 最大分数 的 好整数 n。如果有多个可能的整数，返回 最大 的那个。如果不存在这样的整数，返回一个空字符串。
 */
/**
 * 应该没有什么数学方法吧, 只能用暴力搜索了。
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
  let end = Math.pow(10, num) - 1;
  let index = Math.pow(10, num - 1);
  let maxScore = -1;
  let result = "";
  for (let i = end; i >= index; i--) {
    let digits = i.toString().split("").map(Number);
    let digitSum = digits.reduce((a, b) => a + b, 0);
    if (digitSum === sum) {
      let score = digits.reduce((a, b) => a + b * b, 0);
      if (score > maxScore) {
        maxScore = score;
        result = i.toString();
      }
    }
  }
  return result;
};
/**
 * 超时.好像也没什么可以优化的地方了,这个方案失败
 */
