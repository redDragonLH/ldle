/**
 * 1672. 最富有客户的资产总量
 *
 * 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。
 *
 * 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let count = 0;
  accounts.forEach((e) => {
    count = Math.max(
      count,
      e.reduce((p, c) => p + c, 0)
    );
  });
  return count;
};
/**
 *  执行用时：60 ms, 在所有 JavaScript 提交中击败了70.85%的用户
 *  内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了46.76%的用户
 */
