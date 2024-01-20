/**
 * 2706. 购买两块巧克力
 *
 * 给你一个整数数组 prices ，它表示一个商店里若干巧克力的价格。同时给你一个整数 money ，表示你一开始拥有的钱数。
 * 你必须购买 恰好 两块巧克力，而且剩余的钱数必须是 非负数 。同时你想最小化购买两块巧克力的总花费。
 * 请你返回在购买两块巧克力后，最多能剩下多少钱。如果购买任意两块巧克力都超过了你拥有的钱，请你返回 money 。注意剩余钱数必须是非负数。
 */

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  if (prices.length < 2) return money;
  prices.sort((a, b) => a - b);
  let count = prices[0] + prices[1];
  return count <= money ? money - count : money;
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了87.50%的用户
 * 内存消耗：52.59 MB, 在所有 JavaScript 提交中击败了5.21%的用户
 */