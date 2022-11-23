/**
 * 1742. 盒子中小球的最大数量
 *
 * 你在一家生产小球的玩具厂工作，有 n 个小球，编号从 lowLimit 开始，到 highLimit 结束（包括 lowLimit 和 highLimit ，即 n == highLimit - lowLimit + 1）。另有无限数量的盒子，编号从 1 到 infinity 。
 *
 * 你的工作是将每个小球放入盒子中，其中盒子的编号应当等于小球编号上每位数字的和。例如，编号 321 的小球应当放入编号 3 + 2 + 1 = 6 的盒子，而编号 10 的小球应当放入编号 1 + 0 = 1 的盒子。
 *
 * 给你两个整数 lowLimit 和 highLimit ，返回放有最多小球的盒子中的小球数量。如果有多个盒子都满足放有最多小球，只需返回其中任一盒子的小球数量。
 */
/**
 * 优化方案时怎样较好的获取每个位置的元素
 * 除余应该比转字符性能好一点
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */

var countBalls = function (lowLimit, highLimit) {
  let map = {};
  let max = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    let count = 0;
    let digit = i;

    while (digit) {
      count += digit % 10;
      digit = parseInt(digit / 10);
    }

    map[count] ? map[count]++ : (map[count] = 1);
    max = Math.max(max, map[count]);
  }
  //   console.log(map);
  return max;
};
/**
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了 46.81%的用户
 * 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了48.94%的用户
 */
