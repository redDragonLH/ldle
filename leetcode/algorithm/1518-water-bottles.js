/**
 * 1518. 换酒问题
 *
 * 小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。
 *
 * 如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。
 *
 * 请你计算 最多 能喝到多少瓶酒。
 */

/**
 * 递归处理
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  // 注意余数
  // 初始化
  let result = numBottles;
  let emptyBottle = numBottles;
  let remainder = 0;
  // 如果当前空瓶子和上次兑换多余的瓶子仍旧可以兑换
  while (emptyBottle + remainder >= numExchange) {
    // 获取当前可以兑换多少瓶酒
    //去掉小数点
    let exchange = parseInt((emptyBottle + remainder) / numExchange);
    // 兑完酒还剩多少空瓶
    remainder = (emptyBottle + remainder) % numExchange;
    emptyBottle = exchange;
    result += exchange;
  }
  return result;
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了29.29%的用户
 * 内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了75.76%的用户
 */

/**
 * 官方题解:数学
 * 
 */
 var numWaterBottles = function(numBottles, numExchange) {
    return numBottles >= numExchange ? Math.floor((numBottles - numExchange) / (numExchange - 1)) + 1 + numBottles : numBottles;
};