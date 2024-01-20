/**
 * 1423. 可获得的最大点数
 *
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
 *
 * 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
 *
 * 你的点数就是你拿到手中的所有卡牌的点数之和。
 *
 * 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
 */

/**
 * 滑动窗口这个思路非常好，把获取最大值换成了获取连续元素的最小和，减小了计算的复杂性和逻辑
 *
 * 并且是从反面思考问题，指导意义非凡
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let result = 0;
  let left = 0,
    right = cardPoints.length - 1 - k;
  let count = 0;
  let len = cardPoints.length;
  let all = 0;
  for (let i = 0; i < len; i++) {
    if (i <= right) {
      count += cardPoints[i];
    }
    all += cardPoints[i];
  }
  result = all;
  for (let i = right + 1; i < len; i++) {
    let num = count - cardPoints[left++] + cardPoints[i];
    result = Math.min(num, result, count);
    count = num;
  }
  return all - result;
};
/**
 * 使用的变量和逻辑还是过多
 */
/**
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了38.89%的用户
 * 内存消耗 :46.82 MB, 在所有 JavaScript 提交中击败了27.78%的用户
 */