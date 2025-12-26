/**
 * 2483. 商店的最少代价
 *
 * 给你一个顾客访问商店的日志，用一个下标从 0 开始且只包含字符 'N' 和 'Y' 的字符串 customers 表示：
 *  * 如果第 i 个字符是 'Y' ，它表示第 i 小时有顾客到达。
 *  * 如果第 i 个字符是 'N' ，它表示第 i 小时没有顾客到达。
 * 如果商店在第 j 小时关门（0 <= j <= n），代价按如下方式计算：
 *  * 在开门期间，如果某一个小时没有顾客到达，代价增加 1 。
 *  * 在关门期间，如果某一个小时有顾客到达，代价增加 1 。
 * 请你返回在确保代价 最小 的前提下，商店的 最早 关门时间。
 * 注意，商店在第 j 小时关门表示在第 j 小时以及之后商店处于关门状态。
 */
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let n = customers.length;
  let minPenalty = 0;
  let penalty = 0;
  let res = 0;

  // 计算初始关门时刻为0的代价（全部为Y的都算penalty）
  for (let c of customers) {
    if (c === "Y") penalty++;
  }
  minPenalty = penalty;

  // 枚举关门时刻
  for (let i = 0; i < n; i++) {
    // 如果当前小时是Y，penalty减少1（因为这小时变成开门，不算penalty）
    // 如果当前小时是N，penalty增加1（因为这小时变成开门，N算penalty）
    if (customers[i] === "Y") {
      penalty--;
    } else {
      penalty++;
    }
    if (penalty < minPenalty) {
      minPenalty = penalty;
      res = i + 1;
    }
  }
  return res;
};
/**
 * 执行用时 :14 ms, 在所有 JavaScript 提交中击败了40.00%的用户
 * 内存消耗 :57.75 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */