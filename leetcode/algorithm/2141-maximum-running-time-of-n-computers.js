/**
 * 2141. 同时运行 N 台电脑的最长时间
 *
 * 你有 n 台电脑。给你整数 n 和一个下标从 0 开始的整数数组 batteries ，其中第 i 个电池可以让一台电脑 运行 batteries[i] 分钟。你想使用这些电池让 全部 n 台电脑 同时 运行。
 * 一开始，你可以给每台电脑连接 至多一个电池 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 任意次 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。
 * 注意，你不能给电池充电。
 * 请你返回你可以让 n 台电脑同时运行的 最长 分钟数。
 */

/**
 * 贪心思路
 * 电池理论上可以供电 x = sum/n 分钟，对电池电量从大到小排序，然后从电量最大的电池开始遍历，
 *  若该电池电量超过 x，则将其供给一台电脑，问题缩减为 n-1 台电脑和剩余电池
 *  若该电池电量不超过 x，则说明剩余电池均不超过 x，则所有剩余电池均可供给 n 台电脑 x 分钟，直接返回 x 即可
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => b-a);
  let sum = batteries.reduce((a, b) => a + b, 0);
  
  for (const battery of batteries) {
    if (battery <= Math.floor(sum / n)) {
      return Math.floor(sum / n);
    }
    sum -= battery;
    n--;
  }
};
/**
 * 执行用时：126 ms, 在所有 JavaScript 提交中击败了11.54%的用户
 * 内存消耗：72.82 MB, 在所有 JavaScript 提交中击败了38.46%的用户
 */
