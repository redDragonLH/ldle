/**
 * 1798. 你能构造出连续值的最大数目
 *
 * 给你一个长度为 n 的整数数组 coins ，它代表你拥有的 n 个硬币。第 i 个硬币的值为 coins[i] 。如果你从这些硬币中选出一部分硬币，它们的和为 x ，那么称，你可以 构造 出 x 。
 *
 * 请返回从 0 开始（包括 0 ），你最多能 构造 出多少个连续整数。
 *
 * 你可能有多个相同值的硬币。
 */

/**
 * 如果每个元素都全量查询估计会超时
 *
 * 应该用回溯的算法整体算一遍，然后排序或者用其他方案从头遍历
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  let arr = new Array(40000);
  arr[0] = 1;
  backtracking(coins, 0, coins.length, 0, arr);
  console.log(arr);
  let reuslt = 0;
  for (const num of arr) {
    if (!num) return reuslt;
    reuslt++;
  }
};

let backtracking = (coins, index, len, current, results) => {
  for (let i = index; i < len; i++) {
    backtracking(coins, i + 1, len, current, results);
    current += coins[i];
    results[current] = 1;
    backtracking(coins, i + 1, len, current, results);
  }
};
/**
 * 超时，看来并不支持回溯算法
 */