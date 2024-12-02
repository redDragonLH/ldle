/**
 * 3232. 判断是否可以赢得数字游戏
 *
 * 给你一个 正整数 数组 nums。
 * Alice 和 Bob 正在玩游戏。在游戏中，Alice 可以从 nums 中选择所有个位数 或 所有两位数，剩余的数字归 Bob 所有。如果 Alice 所选数字之和 严格大于 Bob 的数字之和，则 Alice 获胜。
 * 如果 Alice 能赢得这场游戏，返回 true；否则，返回 false。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let count = [0, 0];
  for (const num of nums) {
    if (num < 10) {
      count[0] += num;
    } else {
      count[1] += num;
    }
  }
  return count[0] !== count[1] ? true : false;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了 71.74%的用户
 * 内存消耗：51.57 MB, 在所有 JavaScript 提交中击败了44.44%的用户
 */