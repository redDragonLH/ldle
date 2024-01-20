/**
 * LCP 06. 拿硬币
 *
 * 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
 */

/**
 * 可以拿两次获一次,按照最大次数,少用一次
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    // 这个思路好,+1 那如果原来为0那么就算+1也是0,原来是奇数+1,那得到的偶数除以2也是正确次数,偶数+1 除以2会忽略掉新加的1
    sum += parseInt((coins[i] + 1) / 2);
  }
  return sum;
};
/**
 * 思路精妙
 */