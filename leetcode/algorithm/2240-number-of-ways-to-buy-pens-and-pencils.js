/**
 * 2240. 买钢笔和铅笔的方案数
 *
 * 给你一个整数 total ，表示你拥有的总钱数。同时给你两个整数 cost1 和 cost2 ，分别表示一支钢笔和一支铅笔的价格。你可以花费你部分或者全部的钱，去买任意数目的两种笔。
 * 请你返回购买钢笔和铅笔的 不同方案数目 。
 */
/**
 * 和蹬阶梯差不多，但是不用考虑顺序
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  let pen = parseInt(total / cost1);
  let pencil = parseInt((total % cost1) / cost2);
  let result = 1 + pencil;
  if (!pen) return result;
  while (--pen) {
    let remaining = total - cost1 * pen;
    result += 1 + parseInt(remaining / cost2);
  }

  result += parseInt(total / cost2) + 1;
  return result;
};
/**
 * 执行用时：304 ms, 在所有 JavaScript 提交中击败了17.39%的用户
 * 内存消耗：62.80 MB, 在所有 JavaScript 提交中击败了13.04%的用户
 */