/**
 * 2600. K 件物品的最大和
 *
 * 袋子中装有一些物品，每个物品上都标记着数字 1 、0 或 -1 。
 * 给你四个非负整数 numOnes 、numZeros 、numNegOnes 和 k 。
 * 袋子最初包含：
 *  * numOnes 件标记为 1 的物品。
 *  * numZeroes 件标记为 0 的物品。
 *  * numNegOnes 件标记为 -1 的物品。
 * 现计划从这些物品中恰好选出 k 件物品。返回所有可行方案中，物品上所标记数字之和的最大值。
 */
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  if (numOnes >= k) {
    return k;
  } else if (numOnes + numZeros >= k) {
    return numOnes;
  } else {
    let remaining = k - numOnes - numZeros;
    remaining = Math.min(remaining, numNegOnes);
    return numOnes - remaining;
  }
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了91.18%的用户
 * 内存消耗：43.1 MB, 在所有 JavaScript 提交中击败了63.73%的用户
 */